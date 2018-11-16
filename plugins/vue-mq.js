import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    //xsphone: 320,
    phone: 480,
    tablet: 768,
    desktop: Infinity,
  }
})

// try to sync from asset scss
// $breakpoints: (
//   "xs-phone": 320px,
//   "phone": 480px,
//   "tablet": 768px,
//   "desktop": 1024px,
//   "widescreen": 1200px
// );