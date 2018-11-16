<template>
    <form class="js-cm-form subscribe-form" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="30FEA77E7D0A9B8D7616376B90063231470198E4657BF11B02DEEB97E1D110B35D4DE4D33276D8F69325AB1ED514121B5957AF11A00DF5E9C3D9BB50EA7F0979">	
      <div class="input-holder">
        <input id="fieldEmail" name="cm-zjridu-zjridu" type="email" class="js-cm-email-input" required :placeholder="$t('leaveYourEmail')">
        <i class="icon-mail"></i>
      </div>
      <div class="submit-holder">
        <button class="button is-large is-info js-cm-submit-button" type="submit">{{ $t('newsletterSignUp') }}</button>
      </div>
      <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
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

<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
@import "@/assets/scss/base/_mixins.scss";
@import "@/assets/scss/vendors/_include-media.scss";

.subscribe-form {
  background-color: $white;
  border-radius: 3px;
  padding: 4px;
  border: 1px solid #dfdfdf;
  box-shadow: 0 4px 9px rgba($black, 0.13);
  position: relative;
  display: table;
  border-collapse: separate;
  width: 100%;

  .input-holder {
    padding-left: 10px;
    display: table-row;

    @include media(">=phone") {
      display: table-cell;
      vertical-align: middle;
      width: 100%;
    }

    i {
      @include animate(color);

      color: #9cafbd;
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      top: 19px;
      left: 6px;
      z-index: 2;

      @include media(">=phone") {
        left: 14px;
        top: 49%;
        transform: translateY(-50%);
      }
    }
  }

  .submit-holder {
    display: table-row;
    white-space: nowrap;

    @include media(">=phone") {
      display: table-cell;
      vertical-align: middle;
      width: 1%;
    }
  }

  input[type="email"],
  input[type="text"] {
    @include placeholder {
      color: #878787;
    }

    border: none;
    padding: 0 26px;
    width: 100%;
    color: #878787;
    height: 45px;

    @include media(">=phone") {
      height: 100%;
    }

    &:focus {
      outline: none;

      & + i {
        color: $light-blue;
      }
    }
  }

  input[type="submit"],
  button[type="submit"] {
    white-space: nowrap;
    width: 100%;
    text-transform: uppercase;
    font: 600 12px $roboto-font;

    @include media(">=tablet") {
      font-size: 14px;
    }

    i {
      margin: 0 -9px 0 11px;
      font-size: 14px;
    }
  }
}
</style>
