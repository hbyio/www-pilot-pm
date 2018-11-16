<template>
    <div class="trial-block">
      <div class="text-block">
        <h5>{{ $t('wannaTry') }}</h5>
      </div>
      <ButtonStartTrial></ButtonStartTrial>
    </div>
</template>
<script>
import ButtonStartTrial from '@/components/ButtonStartTrial.vue'
export default {
  components:{
    ButtonStartTrial
  },
  computed: {
    appName(){
      return process.env.appName
    }
  },
}
</script>

<i18n>
{
  "en":{
    "wannaTry":"Do you want to discover Pilot ?"
  },
  "fr":{
    "wannaTry":"Vous voulez découvrir Pilot ?"
  }
}
</i18n>
