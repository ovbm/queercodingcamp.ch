export default function handler(req, res) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- German (default locale) pages -->
  <url>
    <loc>https://www.queercodingcamp.ch</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/about</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/about" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/about" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/anmelden</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/anmelden" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/anmelden" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/spenden</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/spenden" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/spenden" />
  </url>
  
  <!-- English locale pages -->
  <url>
    <loc>https://www.queercodingcamp.ch/en</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/en/about</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/about" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/about" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/en/anmelden</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/anmelden" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/anmelden" />
  </url>
  <url>
    <loc>https://www.queercodingcamp.ch/en/spenden</loc>
    <lastmod>2025-06-01</lastmod>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://www.queercodingcamp.ch/spenden" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.queercodingcamp.ch/en/spenden" />
  </url>
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(sitemap)
} 