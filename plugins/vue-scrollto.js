import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

//Vue.use(VueScrollTo)

// https://rigor789.github.io/vue-scrollto/#/docs?id=options
Vue.use(VueScrollTo, {
    offset: -70,
    easing: "ease-in-out",
    duration: 1000,
 })