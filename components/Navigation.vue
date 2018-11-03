
<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="localePath('index', $i18n.locale)">
          <img src="/images/logo-01.svg" width="121" height="34" alt="LastEdit">
        </nuxt-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">

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
              <a class="button is-info" :class="{'is-medium is-fullwidth':isOpen}">
                {{ $t('signup') }}
              </a>
              <a class="button is-outlined" :class="{'is-medium is-fullwidth':isOpen}">
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
      isOpen: false
    };
  },
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          this.isOpen = !this.isOpen;
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
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
