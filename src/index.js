// JS Goes here - ES6 supported

import "./css/main.css";

import Affix from "vue-affix";
import IconFaq from "./IconFaq.vue"
import Vue from 'vue'

Vue.use(Affix);
// Say hello
console.log("🦊 Hello! Edit me in src/index.js");


var app = new Vue({
  el: '.app',
  components: {
    IconFaq,
  },
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

