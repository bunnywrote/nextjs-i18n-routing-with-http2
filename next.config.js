module.exports = {
  compress: false,
  i18n: {
    locales: ['en', 'de', 'fr', 'it'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en'
      },
      {
        domain: 'example.de',
        defaultLocale: 'de'
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr'
      },
      {
        domain: 'example.it',
        defaultLocale: 'it'
      },
    ]
  },
}
