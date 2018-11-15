const pkg = require("./package");
const readdir = require('readdir-enhanced')
const path = require('path');

module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    htmlAttrs: {
      class: "has-navbar-fixed-top"
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    appUrl: 'https://app.pilot.pm'
  },
  
  render: {
    resourceHints: false,
  },
  serverMiddleware: [
    'redirect-ssl',
    '~/api/index.js',
  ],
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white"
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "blue",
    height: "3px",
    duration: 1000
  },

  /*
  ** Global CSS
  */
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    //"bulma",
    "@/assets/scss/main.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~plugins/filters.js",
    "~plugins/vue-scrollto.js",
    { src: "~plugins/vue-affix.js", ssr: false },
    { src: "~plugins/vue-scrollactive.js", ssr: false },
    { src: "~plugins/vue-mq.js", ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "en",
            name: "English",
            iso: "en-US",
            file: "en.js"
          },
          {
            code: "fr",
            name: "Français",
            iso: "fr-FR",
            file: "fr.js"
          }
        ],
        defaultLocale: "en",
        parsePages: false,
        vueI18nLoader: true,
        baseUrl: "https://www.pilot.pm",
        lazy: true,
        langDir: "locales/"
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://github.com/nuxt-community/axios-module#options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    browserBaseURL: process.env.BASE_URL || 'http://localhost:3000',
    https: true
    //debug: true,
  },
  /*
  ** Sitemap module configuration
  ** https://github.com/nuxt-community/sitemap-module
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    cacheTime: 1000 * 60 * 15,
    generate: true, //Generates static sitemap file during build/generate instead of serving using middleware.
    gzip: true,
    routes () {
      let menu = []
      let files =  readdir.sync('./content', {filter: '**/*.md',deep: true});
      files.forEach(file => {
          let fileCuts = path.parse(file);
          // Returns:
          // { root: '/',
          //   dir: '/home/user/dir',
          //   base: 'file.txt',
          //   ext: '.txt',
          //   name: 'file' }
          let menuItem = path.join(fileCuts.dir, fileCuts.name);
          menu.push(menuItem)
      });
      return menu
      
    }
  },


  /*
  ** Build configuration
  */
  build: {
    watch: [
      'api/**/*.js' 
    ],
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
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.node = { fs: 'empty' };
    }
  }
};
