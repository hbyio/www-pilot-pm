// JS Goes here - ES6 supported

import "./css/main.css";

import Affix from "vue-affix";
import IconFaq from "./components/IconFaq.vue";
import Vue from "vue";

Vue.use(Affix);
// Say hello
console.log("🦊 Hello! Edit me in src/index.js");




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

var app = new Vue({
  el: "#app",
  mixins: [navigationMixin],
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  },
  delimiters: ["[[", "]]"]
});