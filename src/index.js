// JS Goes here - ES6 supported

import "./scss/main.scss";

import Affix from "vue-affix";

import Vue from "vue";
Vue.use(Affix);


var navigationMixin = {
  data: {
    isMenuOpen: false
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};

new Vue({
  el: "#app",
  mixins: [navigationMixin],
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  },
  delimiters: ["[[", "]]"]
});


// Say hello
console.log("🦊 Hello! Edit me in src/index.js");