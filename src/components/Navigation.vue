
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="localePath('index', $i18n.locale)">
          <div class="logo">{{appName}}</div>
        </nuxt-link>
        <a role="button" 
            :class="{'is-active':isMenuOpen}"
            class="navbar-menu-toggle" 
            @click="toggleMenu()"
            aria-label="menu" 
            aria-expanded="false" 
        >
          <template v-if="isMenuOpen">{{ $t('close') }}</template>
          <template v-else>Menu</template>
        </a>
      </div>

      <div  @click="closeMenu()" 
            class="navbar-menu" 
            :class="{'is-active':isMenuOpen}"
      >
        <div class="navbar-start">
          <nuxt-link 
            :to="localePath({name:'index', hash:'#functionality-section'},$i18n.locale)"
            class="navbar-item" 
          >
            {{ $t('features') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath({name:'index', hash:'#prices-section'},$i18n.locale)"
            class="navbar-item" 
          >
            {{ $t('prices') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath({name:'resources'}, $i18n.locale)"
            class="navbar-item" 
          >
            {{ $t('resources') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath({name:'blog'}, $i18n.locale)"
            class="navbar-item" 
          >
            {{ $t('blog') }}
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <img :src="'/icons/'+$i18n.locale+'.png'" alt="">
            </a>

            <div class="navbar-dropdown is-boxed">
              <nuxt-link  class="navbar-item" 
                          v-if="$i18n.locale === 'fr'"
                          :to="switchLocalePath('en')">
                          <img src="/icons/en.png" alt=""/>&nbsp;&nbsp;Switch to English
              </nuxt-link>
              <nuxt-link  class="navbar-item" 
                          v-if="$i18n.locale === 'en'"
                          :to="switchLocalePath('fr')">
                          <img src="/icons/fr.png" alt=""/>&nbsp;&nbsp;Interface en Français
              </nuxt-link>
            </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a :href="registrationUrl" class="button is-info" :class="{'is-medium is-fullwidth':isMenuOpen}">
                {{ $t('signup') }}
              </a>
              <a :href="loginUrl" class="button is-outlined" :class="{'is-medium is-fullwidth':isMenuOpen}">
                {{ $t('login') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data: () => {
    return {
      isMenuOpen: false
    };
  },
  computed:{
      registrationUrl(){
        return process.env.appUrl+"/registration?lang="+this.$store.app.i18n.locale
      },
      loginUrl(){
        return process.env.appUrl+"/login?lang="+this.$store.app.i18n.locale
      },
      appName(){
        return process.env.appName
      }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
@import "@/assets/scss/vendors/_include-media.scss";

a {
  text-decoration: none;
}

.navbar {
  border-bottom: 1px solid $gray-light;
}
.navbar-menu.is-active {
  .navbar-start,
  .navbar-item,
  .navbar-end,
  .buttons,
  .navbar-dropdown {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .buttons {
    padding: 0 1em;
  }
  .navbar-item {
    padding: 1em 0;
  }
}

.container {
  padding: 0;
}

.navbar-link{
  @include media("<=desktop") {
      display: none;
  }
}

.navbar-menu-toggle{
  align-items: center;
  color: #4a4a4a;
  cursor: pointer;
  display: flex;
  height: 52px;
  justify-content: flex-end;
  padding-right: 1em;
  text-decoration: underline;
  width: 100%;
  @include media(">=desktop") {
      display: none;
  }
}
</style>
