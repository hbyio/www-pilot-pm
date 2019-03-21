<template>
  <main id="main">
    home
  </main>
</template>
<script>
import ButtonStartTrial from '@/components/ButtonStartTrial.vue'
import VueScrollTo from 'vue-scrollto';
export default {
  components:{
    ButtonStartTrial
  },
  mounted() {
    console.log(this)
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 200);
    });

    if(this.$route.hash){
      VueScrollTo.scrollTo(this.$route.hash)
    }
    
  },
  // asyncData: async ({ app, route, payload }) => ({
  //   post: payload || await app.$content('/').get(route.path)
  // })

};
</script></script>
<style lang="scss" scoped>

.container{
  margin-bottom:150px;
}
</style>
