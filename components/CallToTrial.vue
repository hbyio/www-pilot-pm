<template>
    <div class="trial-block">
      <strong class="logo">
        <a href="/">
          <img src="/images/logo-01.svg" alt="LastEdit">
        </a>
      </strong>
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
  }
}
</script>

<i18n>
{
  "en":{
    "wannaTry":"Dou you want to discover Pilot ?"
  },
  "fr":{
    "wannaTry":"Vous voulez découvrir Pilot ?"
  }
}
</i18n>
