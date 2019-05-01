// JS Goes here - ES6 supported

import "./scss/main.scss";

import { Affix } from "vue-affix";
import Vue from "vue";
import tocbot from "./vendors/tocbot";

//Vue.use(Affix);


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
  components: {
    Affix,
  },
  mounted(){
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3, h4',
      //collapseDepth  :  6,
      //headingsOffset :  1,
      orderedList: false,
      //scrollSmooth: true,
    }); 
  },
  delimiters: ["[[", "]]"]
});


// Say hello
console.log("🦊 Hello! Edit me in src/index.js");