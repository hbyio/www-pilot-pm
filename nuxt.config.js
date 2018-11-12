const pkg = require("./package");

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
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  generate: {
    routes: [
      "/resources/channels",
      "/resources/projects",
      "/resources/items",
      "/resources/guides",
      "/resources/faq",

      "/fr/resources/channels",
      "/fr/resources/projects",
      "/fr/resources/items",
      "/fr/resources/guides",
      "/fr/resources/faq"
    ]
  },
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
    "~plugins/vue-scrollto.js",
    { src: "~plugins/vue-affix.js", ssr: false },
    { src: "~plugins/vue-scrollactive.js", ssr: false },
    { src: "~plugins/vue-mq.js", ssr: false },
  ],

  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }

      return { x: 0, y: 0 };
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
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
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //baseUrl: process.env.BASE_URL || "http://localhost:3000"
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
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      config.module.rules.push({
        test: /\.(md)$/,
        loader: "raw-loader"
      });
    }
  }
};
