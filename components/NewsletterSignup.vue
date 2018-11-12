<template>
    <form action="#" class="subscribe-form">
      <div class="input-holder">
        <input type="email" :placeholder="$t('leaveYourEmail')">
        <i class="icon-mail"></i>
      </div>
      <div class="submit-holder">
        <button type="submit" class="btn">{{ $t('newsletterSignUp') }}</button>
      </div>
    </form>
</template>
<script>
export default {
    name:"NewsletterSignup"
}
</script>


<i18n>
{
  "en": {
    "leaveYourEmail": "Subscribe to the newsletter",
    "newsletterSignUp": "Subscribe"
  },
  "fr": {
    "leaveYourEmail": "S’inscrire à la newsletter",
    "newsletterSignUp":"S'incrire"
  }
}
</i18n>