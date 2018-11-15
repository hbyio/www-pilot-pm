<template>
    <div class="text-holder">
        <h3>{{ $t('youDidNotFind') }}</h3>
        <button class="button is-info is-outlined" @click.prevent="showIntercom()">{{ $t('contactUs') }}</button>
        <!-- <form action="#" class="subscribe-form">
            <div class="input-holder">
                <input type="email" placeholder="Entrez votre email…">
                <i class="icon-mail"></i>
            </div>
            <div class="submit-holder">
                <button type="submit" class="btn">CONTACTEZ-NOUS</button>
            </div>
        </form> -->
    </div>
</template>
<script>
export default {
    methods: {
        showIntercom(){
          this.$intercom.show();
        }
    }
}
</script>


<i18n>
{
  "en":{
    "youDidNotFind":"You have not found what you are looking for ?",
    "contactUs":"Contact us we will do our best to answer them."
  },
  "fr":{
    "youDidNotFind":"Vous n’avez pas trouvé ce que vous cherchez ?",
    "contactUs":"Contactez-nous nous ferons de notre mieux pour y répondre."
  }
}
</i18n>
