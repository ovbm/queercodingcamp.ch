module.exports = {
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/datenschutz',
        destination: 'https://docs.google.com/document/d/1CWwN-LjF45uHFkKDJ0fxm0pOsHHzsWoxUUQmSqrFUZ4/edit?usp=share_link',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ]
  },
}
