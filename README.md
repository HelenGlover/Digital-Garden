[![Netlify Status](https://api.netlify.com/api/v1/badges/8cfa8785-8df8-4aad-ad35-8f1c790b8baf/deploy-status)](https://app.netlify.com/sites/digital-garden-jekyll-template/deploys)

# Digital Garden

Code for my digital garden which is part of my [personal website](https://helenyglover.com/)

With thanks to Maxime Vaillancourt for the source code: [Your own digital garden with Jekyll](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll)



## Build and link audit

Run with the locked dependencies:

```sh
bundle install
JEKYLL_ENV=production bundle exec jekyll build
bundle exec ruby scripts/check_site.rb
bundle exec ruby scripts/check_publication_policy.rb
node scripts/check_javascript.cjs
```

The checker validates generated internal links, fragments, image filename case,
Open Graph images, unique titles, descriptions, canonical URLs, graph targets,
and sitemap coverage for HTML pages. The existing HTML-rendered `quotes.txt`
is inspected but excluded from coverage because jekyll-sitemap excludes text files.
Unpublished Markdown without front matter remains unpublished.

## Drafts and search indexing

`For later/` and `_thoughts/` are private working folders in the repository:
they are excluded from the generated website, including raw files and sitemaps.
Do not move a draft into `_notes/` until it is ready to publish. For an unpublished
note in that collection, set `published: false` in its frontmatter.

Empty note entries that link to articles hosted elsewhere stay in the writing
list, but their local placeholder pages use `noindex` and are omitted from the
sitemap. This is enforced by `_plugins/publication_policy.rb`.

Previously deployed draft URLs must return 404 after the corrected build is
deployed. Search engines may retain old results until they recrawl those URLs;
Google Search Console's Removals tool can temporarily hide an urgent result.
Do not block those old URLs in robots.txt: crawlers need to see that they are gone.

Keep `url: https://helenyglover.com` and `baseurl: /writing` for both Netlify
and mirror builds. Netlify remains the origin behind the personal site's reverse
proxy. The generated `/writing/robots.txt` advertises the canonical sitemap, but
crawlers use the domain-root `/robots.txt`: that file belongs to the parent site
and should also advertise `https://helenyglover.com/writing/sitemap.xml` and allow
`/writing/`. This repository cannot configure the parent proxy or root robots file.
External sites and live feedback-sheet data require separate network checks;
a passing local check does not guarantee indexing.
