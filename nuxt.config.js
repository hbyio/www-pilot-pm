const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'homepage'
    },
    htmlAttrs:{
      class: 'has-navbar-fixed-top'
    }
  },

  /*
  ** Customize the progress-bar color
  */
 loading: {
    color: 'blue',
    height: '3px'
  },

  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          name: 'English',
          iso: 'en-US',
        },
        {
          code: 'fr',
          name: 'Français',
          iso: 'fr-FR',
        }
      ],
      defaultLocale: 'en',
      vueI18nLoader: true,
      baseUrl: 'https://www.pilot.pm',
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: {
            features: 'features',
            prices:'prices',
            resources:'resources'
          },
          fr: {
            features: 'fonctionnalités',
            prices:'tarifs',
            resources:'ressources'
          }
        }
      }
    }],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
