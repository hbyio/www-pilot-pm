// JS Goes here - ES6 supported

import "./scss/main.scss";

import { Affix } from "vue-affix";
import Vue from "vue";
import tocbot from "tocbot";

Vue.config.delimiters = ["[[", "]]"]


if(document.getElementById("js-navigation")){
  new Vue({
    el: "#js-navigation",
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
  });
}

if(document.getElementsByClassName("withtoc").length > 0){
  
  new Vue({
    el: ".withtoc",
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
    }
  });


}

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");