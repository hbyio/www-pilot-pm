<template>
  <div id="wrapper">
    <Navigation></Navigation>
    <nuxt/>
    <Footer></Footer>
  </div>
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
export default {
  name:'defaultLayout',
  components:{
    Navigation,
    Footer,
  },
  mounted(){
    if(!this.$store.app.context.isDev){
        this.$intercom.boot();
    }
  }
}
</script>

