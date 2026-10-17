# frozen_string_literal: true
# Run after bundle exec jekyll build. Checks generated URLs without network access.
require 'nokogiri'
require 'addressable/uri'
require 'json'
require 'pathname'

ROOT = Pathname.new(ARGV.fetch(0, '_site')).expand_path
ORIGIN = 'https://helenyglover.com'
BASE = '/writing/'
errors = []
pages = {}
titles = {}
references = 0
resolve = lambda do |raw, source, fragment_check = true|
  next if raw.nil? || raw.empty? || raw.match?(/\A(?:data:|mailto:|tel:|javascript:)/i)
  begin
    uri = Addressable::URI.join(ORIGIN + source, raw)
    if uri.host == 'helengarden.netlify.app' || uri.host == 'helenglover.github.io'
      errors << "#{source}: old host #{raw}"
      next
    end
    next unless uri.host == 'helenyglover.com'
    path = Addressable::URI.unencode(uri.path)
    # The parent personal site lives outside the garden and is checked separately.
    next unless path.start_with?(BASE) || path == '/writing'
    relative = path.delete_prefix('/writing').sub(%r{\A/}, '')
    candidates = [relative, "#{relative}.html", "#{relative.sub(%r{/$}, '')}/index.html"]
    candidates.unshift('index.html') if relative.empty?
    target = candidates.find { |candidate| ROOT.join(candidate).file? }
    unless target
      errors << "#{source}: missing target #{raw}"
      next
    end
    # Windows is case insensitive; check each component against directory entries.
    cursor = ROOT
    target.split('/').reject(&:empty?).each do |part|
      errors << "#{source}: filename case mismatch #{raw}" unless cursor.children.any? { |entry| entry.basename.to_s == part }
      cursor = cursor.join(part)
    end
    if fragment_check && uri.fragment && !uri.fragment.empty? && target.end_with?('.html')
      document = pages[target] ||= Nokogiri::HTML(ROOT.join(target).read)
      id = Addressable::URI.unencode(uri.fragment)
      errors << "#{source}: missing fragment #{raw}" unless document.css('[id], a[name]').any? { |node| node['id'] == id || node['name'] == id }
    end
    references += 1
  rescue Addressable::URI::InvalidURIError => e
    errors << "#{source}: invalid URL #{raw}: #{e.message}"
  end
end

html_files = ROOT.glob('**/*').select { |file| file.file? && (file.extname == '.html' || file.read(100).to_s.include?('<!DOCTYPE html>')) }
canonicals = []
html_files.each do |file|
  relative = file.relative_path_from(ROOT).to_s.tr('\\', '/')
  source = BASE + relative.sub(%r{index\.html$}, '').sub(/\.html$/, '')
  source = BASE + relative if relative == '404.html'
  doc = pages[relative] ||= Nokogiri::HTML(file.read)
  %w[title meta[name="description"] link[rel="canonical"] meta[property="og:title"] meta[property="og:description"] meta[property="og:url"] meta[property="og:image"]].each do |selector|
    nodes = doc.css(selector)
    value = selector == 'title' ? nodes.first&.text : nodes.first&.[](selector.start_with?('link') ? 'href' : 'content')
    errors << "#{source}: expected one nonempty #{selector}" unless nodes.size == 1 && value && !value.strip.empty?
  end
  title = doc.at_css('title')&.text&.strip
  errors << "#{source}: duplicate title also on #{titles[title]}" if titles.key?(title)
  titles[title] = source
  canonical = doc.at_css('link[rel="canonical"]')&.[]('href')
  if canonical
    errors << "#{source}: incorrect canonical #{canonical}" unless canonical.start_with?(ORIGIN + BASE)
    errors << "#{source}: OG URL differs from canonical" unless doc.at_css('meta[property="og:url"]')&.[]('content') == canonical
    canonicals << canonical if relative.end_with?('.html') && !doc.at_css('meta[name="robots"]')&.[]('content')&.include?('noindex')
    resolve.call(canonical, source, false)
  end
  errors << "#{source}: nested document markup" unless doc.css('head').size == 1 && doc.css('body').size == 1
  doc.css('a[href], img[src], script[src], link[href], iframe[src], source[src], video[poster]').each do |node|
    value = node['href'] || node['src'] || node['poster']
    next if value.to_s.empty?
    errors << "#{source}: unrendered Liquid URL #{value}" if value.include?('{{') || value.include?('{%')
    if value.start_with?('/') && !value.start_with?('//') && !value.start_with?(BASE) && value != '/'
      errors << "#{source}: URL escapes baseurl #{value}"
    end
    resolve.call(value, source)
  end
  doc.css('meta[property="og:image"]').each { |node| resolve.call(node['content'], source, false) }
  doc.css('[srcset]').each do |node|
    node['srcset'].split(',').each { |entry| resolve.call(entry.strip.split.first, source, false) }
  end
end
ROOT.glob('**/*.css').each do |file|
  source = BASE + file.relative_path_from(ROOT).to_s.tr('\\', '/')
  file.read.scan(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/).flatten.each { |url| resolve.call(url, source, false) }
end
sitemap = Nokogiri::XML(ROOT.join('sitemap.xml').read)
sitemap.remove_namespaces!
locations = sitemap.xpath('//url/loc').map(&:text)
locations.each do |url|
  errors << "sitemap: wrong origin/baseurl #{url}" unless url.start_with?(ORIGIN + BASE)
  resolve.call(url, BASE + 'sitemap.xml', false)
end
(canonicals - locations).each { |url| errors << "sitemap: missing published page #{url}" }
errors << 'sitemap: includes 404' if locations.any? { |url| url.end_with?('/404.html') }
robots = ROOT.join('robots.txt').read
errors << 'robots: missing canonical sitemap' unless robots.include?("Sitemap: #{ORIGIN}#{BASE}sitemap.xml")
graph = JSON.parse(File.read('_includes/notes_graph.json'))
graph['nodes'].each { |node| resolve.call(node['path'], BASE, false) }
node_ids = graph['nodes'].map { |node| node['id'] }
graph['edges'].each do |edge|
  errors << "graph: missing edge endpoint #{edge}" unless node_ids.include?(edge['source']) && node_ids.include?(edge['target'])
end
if errors.empty?
  puts "PASS: #{html_files.size} HTML pages, #{references} local references, #{locations.size} sitemap URLs, #{graph['nodes'].size} graph nodes; SEO, assets, fragments, robots and sitemap coverage."
else
  warn errors.uniq.join("\n")
  abort "FAIL: #{errors.uniq.size} errors"
end
