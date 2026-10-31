# frozen_string_literal: true
# Run after a production build. Draft content must never enter a deploy artifact.
require 'nokogiri'
require 'yaml'
require 'date'
require 'pathname'

root = Pathname('_site')
errors = []
sitemap = Nokogiri::XML(root.join('sitemap.xml').read)
sitemap.remove_namespaces!
locations = sitemap.xpath('//url/loc').map(&:text)
private_paths = %r{For(?:%20| )later|_thoughts|/thoughts/}i

root.glob('**/*').each do |file|
  errors << "Draft artifact was generated: #{file}" if file.to_s.match?(private_paths)
end
locations.each do |url|
  errors << "Draft appeared in sitemap: #{url}" if url.match?(private_paths)
end
pages = root.glob('**/*.html').map { |file| [file, Nokogiri::HTML(file.read)] }
pages.each do |file, doc|
  doc.css('a[href], link[href], meta[content], script').each do |node|
    value = node['href'] || node['content'] || node.text
    errors << "Draft referenced in generated page: #{file}" if value.match?(private_paths)
  end
end

placeholders = 0
Dir['_notes/*.md'].each do |source|
  parts = File.read(source).split(/^---[ \t]*\r?$/, 3)
  next unless parts.size == 3

  data = YAML.safe_load(parts[1], permitted_classes: [Date, Time]) || {}
  next if data['external_url'].to_s.empty? || !parts[2].strip.empty?

  placeholders += 1
  matches = pages.select { |_, doc| doc.at_css('title')&.text&.include?(data.fetch('title')) }
  errors << "Expected a local link placeholder for #{source}" unless matches.size == 1
  matches.each do |file, doc|
    robots = doc.at_css('meta[name="robots"]')&.[]('content').to_s
    errors << "Placeholder missing noindex: #{file}" unless robots.split(/[,\s]+/).include?('noindex')
    canonical = doc.at_css('link[rel="canonical"]')&.[]('href')
    errors << "Placeholder appeared in sitemap: #{file}" if locations.include?(canonical)
  end
end
abort errors.uniq.join("\n") unless errors.empty?
puts "PASS: no draft files, links or sitemap URLs; #{placeholders} external-only placeholders excluded from indexing."
