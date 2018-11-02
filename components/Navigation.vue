
<template>
    <header id="header">
      <div class="container">
        <div class="nav-holder">
          <strong class="logo">
            <nuxt-link to="/">
              <img src="images/logo-01.svg" width="121" height="34" alt="LastEdit">
            </nuxt-link>
          </strong>
          <a href="#" class="nav-opener"><span>Menu</span></a>
        </div>
        <nav id="nav">
          <ul class="menu">
            <li><a href="#">{{ $t('features') }}</a></li>
            <li><a href="#">{{ $t('prices') }}</a></li>
            <li><a href="#">clients</a></li>
            <li><nuxt-link to="/resources">{{ $t('resources') }}</nuxt-link></li>
          </ul>
          <div class="extra-nav">
            <div class="lang-item">

              <a href="#">{{ $i18n.locale }}<i class="icon-angle-down"></i></a>
              <ul class="drop">
                <li v-for="locale in $i18n.locales" :key="locale.code">
                  <nuxt-link :to="switchLocalePath(locale.code)">
                    {{ locale.name }}
                  </nuxt-link>
                </li>
              </ul> 
            </div>
            <div class="btn-holder">
              <a href="#" class="btn">Essai Gratuit</a>
              <a href="#" class="btn btn-white">Login</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
</template>


