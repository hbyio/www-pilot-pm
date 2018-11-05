
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="localePath('index', $i18n.locale)">
          <img src="/images/logo-01.svg" width="121" height="34" alt="LastEdit">
        </nuxt-link>
        <a role="button" 
            :class="{'is-active':isMenuOpen}"
            class="navbar-burger burger" 
            @click="toggleMenu()"
            aria-label="menu" 
            aria-expanded="false" 
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div @click="toggleMenu()" 
      class="navbar-menu" 
      :class="{'is-active':isMenuOpen}">

        <div class="navbar-start">
          <nuxt-link 
            :to="localePath({name:'index', hash:'#functionality-section'},$i18n.locale)"
            class="navbar-item is-tab" 
          >
            {{ $t('features') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath({name:'index', hash:'#prices-section'},$i18n.locale)"
            class="navbar-item is-tab" 
          >
            {{ $t('prices') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath({name:'resources'}, $i18n.locale)"
            class="navbar-item is-tab" 
          >
            {{ $t('resources') }}
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              {{ $i18n.locale }}
            </a>

            <div class="navbar-dropdown is-boxed">
              <nuxt-link  class="navbar-item" 
                          v-for="locale in $i18n.locales" 
                          :key="locale.code" 
                          :class="{'is-active': locale.code === $i18n.locale}"
                          :to="switchLocalePath(locale.code)">
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-info" :class="{'is-medium is-fullwidth':isMenuOpen}">
                {{ $t('signup') }}
              </a>
              <a class="button is-outlined" :class="{'is-medium is-fullwidth':isMenuOpen}">
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
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";

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

.navbar-item {
  text-transform: capitalize;
}
</style>
