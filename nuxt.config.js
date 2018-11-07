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

  generate: {
    routes: ["/resources/channels", "resources/projects"]
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
    // 'bulma',
    "@/assets/scss/main.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~plugins/vue-scrollto.js"],

  router: {
    scrollBehavior: function(to, from, savedPosition) {
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      // console.log("to", to);
      // console.log("from", from);
      // console.log("savedPosition", savedPosition);
      let position = false;

      // if no children detected
      if (to.matched.length < 2) {
        // scroll to the top of the page
        position = { x: 0, y: 0 };
        position.offset = { x: 0, y: 70 };
        //console.log("no children", position);
      } else if (
        to.matched.some(r => r.components.default.options.scrollToTop)
      ) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 };
        position.offset = { x: 0, y: 70 };
        //console.log("scrollToTop present", position);
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition;
        //console.log("Saved position", position);
      }

      if (to.name === from.name && to.hash && document.querySelector(to.hash)) {
        //console.log("to hash same page", to.hash);
        // scroll to anchor by returning the selector
        position = { selector: to.hash };
        position.offset = { x: 0, y: 70 };
        return position;
      }
      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once("triggerScroll", () => {
          //console.log("scroll triggered");
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash && document.querySelector(to.hash)) {
            //console.log("tohash in trigger", to.hash);
            // scroll to anchor by returning the selector
            position = { selector: to.hash };
            position.offset = { x: 0, y: 70 };
          }
          //console.log("before resolve IN TRIGGER : ", position);
          resolve(position);
        });
      });
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
