import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Meta = ({ title, description, type = 'website' }) => {
  const router = useRouter()
  
  // Build the canonical URL based on current path and locale
  const baseUrl = 'https://www.queercodingcamp.ch'
  const currentPath = router.asPath
  
  // For default locale (de), use base path without /de prefix
  // For English, include /en prefix
  const canonicalUrl = router.locale === 'de' 
    ? `${baseUrl}${currentPath}`
    : `${baseUrl}/${router.locale}${currentPath}`

  // Build alternate language URLs for hreflang
  const alternateUrls = {
    de: `${baseUrl}${currentPath}`,
    en: `${baseUrl}/en${currentPath}`
  }

  // Structured data for the organization
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Queer Coding Camp",
    "url": "https://www.queercodingcamp.ch",
    "logo": "https://www.queercodingcamp.ch/images/queercodingcamp_logo_color_dark.png",
    "description": router.locale === 'de' 
      ? "Programmieren lernen für junge queere Menschen in der Schweiz"
      : "Learn programming for young queer people in Switzerland",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Zurich",
      "addressCountry": "CH",
      "addressRegion": "Zurich"
    },
    "sameAs": [
      "https://instagram.com/queercodingcamp"
    ]
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index, follow' />
      
      {/* Canonical and Language */}
      <link rel='canonical' href={canonicalUrl} />
      <link rel='alternate' hrefLang='de' href={alternateUrls.de} />
      <link rel='alternate' hrefLang='en' href={alternateUrls.en} />
      <link rel='alternate' hrefLang='x-default' href={alternateUrls.de} />
      
      {/* Open Graph Tags */}
      <meta name='og:type' content={type} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta name='og:url' content={canonicalUrl} />
      <meta name='og:site_name' content='Queer Coding Camp' />
      <meta name='og:locale' content={router.locale === 'de' ? 'de_CH' : 'en_US'} />
      <meta name='og:locale:alternate' content={router.locale === 'de' ? 'en_US' : 'de_CH'} />
      <meta
        name='og:image'
        content='https://www.queercodingcamp.ch/images/queercodingcamp_og_image.png'
      />
      <meta name='og:image:width' content='1200' />
      <meta name='og:image:height' content='630' />
      <meta name='og:image:alt' content='Queer Coding Camp Logo' />
      
      {/* Twitter Cards */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@queercodingcamp' />
      <meta name='twitter:creator' content='@obauma' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:url' content={canonicalUrl} />
      <meta
        name='twitter:image'
        content='https://www.queercodingcamp.ch/images/queercodingcamp_og_image.png'
      />
      <meta name='twitter:image:alt' content='Queer Coding Camp Logo' />
      
      {/* Additional SEO Meta Tags */}
      <meta name='author' content='Queer Coding Camp' />
      <meta name='keywords' content={
        router.locale === 'de' 
          ? 'Programmieren lernen, LGBTQ+, Queer, Coding Camp, Schweiz, Jugendliche, Web Development, Game Development, Jugendlager'
          : 'Learn programming, LGBTQ+, Queer, Coding Camp, Switzerland, Youth, Web Development, Game Development, Youth Camp'
      } />
      <meta name='language' content={router.locale === 'de' ? 'German' : 'English'} />
      <meta name='geo.region' content='CH' />
      <meta name='geo.country' content='Switzerland' />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData)
        }}
      />
    </Head>
  )
}

export default Meta
