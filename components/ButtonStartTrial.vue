<template>
    <!-- <form action="#" class="subscribe-form">
      <div class="input-holder">
        <input type="email" :placeholder="$t('home.enterYourEmail')">
        <i class="icon-mail"></i>
      </div>
      <div class="submit-holder">
        <button type="submit" class="btn">
            {{ $t('home.startTrial') }}
            <i class="icon-arrow-right"></i>
        </button>
      </div>
    </form> -->

    <!-- {{ $t('home.createYourDesk') }} -->
    <div>
        <a :href="registrationUrl" class="button" :class="buttonClasses">
            <template v-if="text">{{ text }}</template>
            <template v-else>{{ $t('home.createYourDesk') }}</template>
        </a>
        <p v-show="showConditions" class="conditions">{{ $t('home.trialConditions') }}</p>
    </div>
</template>

<script>
export default {
    props:{
        buttonClasses:{
            type:String,
            default: 'is-info'
        },
        text:{
            type:String
        },
        showConditions:{
            type:Boolean,
            default:true,
        }
    },
    computed:{
        registrationUrl(){
            return process.env.appUrl+"/registration?lang="+this.$store.app.i18n.defaultLocale
        }
    }
}
</script>


<style lang="scss" scoped>
.button{
    padding: 1.5em;
    text-decoration: none;
}
.conditions{
    margin-top: .8em;
}
</style>

