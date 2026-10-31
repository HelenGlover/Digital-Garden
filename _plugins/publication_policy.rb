# frozen_string_literal: true

# An external reading link is useful in the writing list, but its empty local
# placeholder is not another published article for search engines to index.
Jekyll::Hooks.register :site, :post_read do |site|
  site.collections.fetch('notes').docs.each do |note|
    next if note.data['external_url'].to_s.empty?
    next unless note.content.strip.empty?

    note.data['sitemap'] = false
  end
end
