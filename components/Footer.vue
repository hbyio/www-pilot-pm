<template>
    <footer id="footer">
    <div class="footer-nav">
      <div class="container">
        <div class="row">
          <div class="col">
            <h5>{{ $t('resources') }}</h5>
            <div
              v-for="link in resources"
              :key="link.slug"
              v-if="!link.draft"
            >
              <nuxt-link :to="localePath({name:'resources-slug', params: { slug: link.slug }}, $i18n.locale)">
                {{ link.title }}
              </nuxt-link> 
            </div>
          </div>
          <!-- <div class="col">
            <h5>{{ $t('useCases') }}</h5>
            <div><a href="#">Organiser son workflow de contenus</a></div>
            <div><a href="#">Refondre un site internet</a></div>
            <div><a href="#">Accompagner son équipe sur la plateforme</a></div>
          </div> -->
          <div class="col">
            <h5>
              <nuxt-link :to="localePath({name:'policies'}, $i18n.locale)">
                {{ $t('company') }}
              </nuxt-link> 
            </h5>
            <div>
              <nuxt-link :to="localePath({name:'blog'}, $i18n.locale)">
                {{ $t('blog') }}
              </nuxt-link> 
            </div>
            <div>
              <nuxt-link :to="localePath({name:'policies-slug', params: { slug: 'terms' }}, $i18n.locale)">
                {{ $t('terms') }}
              </nuxt-link> 
            </div>
            <div>
              <nuxt-link :to="localePath({name:'policies-slug', params: { slug: 'sla' }}, $i18n.locale)">
                {{ $t('sla') }}
              </nuxt-link> 
            </div>
            <div>
              <nuxt-link :to="localePath({name:'policies-slug', params: { slug: 'infra' }}, $i18n.locale)">
                {{ $t('infra') }}
              </nuxt-link> 
            </div>
            <div>
              <nuxt-link :to="localePath({name:'policies-slug', params: { slug: 'privacy' }}, $i18n.locale)">
                {{ $t('privacy') }}
              </nuxt-link> 
            </div>
          </div>
          <div class="col">
            <h5>{{ $t('product') }}</h5>
            <div><a href="#">Les Fonctionnadivtés</a></div>
            <div><a href="#">Nos Tarifs</a></div>
            <div><a href="#">Nos Cdivents</a></div>
            <div><a href="#">Cas Pratiques</a></div>
          </div>
        </div>
      </div>
    </div>
      <div class="container">
        <div class="contact-holder">
          <div class="info-block">
            <strong class="logo">
              <a href="#"><img src="/images/logo.svg" alt="LastEdit"></a>
            </strong>
            <ul class="social-networks">
              <li><a href="#"><i class="icon icon-twitter"></i>@lastedit</a></li>
              <li><a href="mailto:&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#108;&#097;&#115;&#116;&#101;&#100;&#105;&#116;&#046;&#099;&#111;&#109;"><i class="icon icon-mailto"></i>&#099;&#111;&#110;&#116;&#097;&#099;&#116;&#064;&#108;&#097;&#115;&#116;&#101;&#100;&#105;&#116;&#046;&#099;&#111;&#109;</a></li>
            </ul>
          </div>
          <div class="form-block">
            <NewsletterSignup></NewsletterSignup>
          </div>
        </div>
      </div>
      <div class="credits">© Huckleberry 2018 🤖 🚀 - SIRET 79817197100012 - TVA FR18798171971 - Fabriqué en Europe 🇪🇺 / 🇫🇷 .</div>
    </footer>
</template>
<script>
import NewsletterSignup from "@/components/NewsletterSignup.vue";
export default {
  name: "Footer",
  components: {
    NewsletterSignup
  },
  data: () => {
    return {
      resources: [],
      error:null
    };
  },
  mounted() {
    let locale = this.$i18n.locale;
    this.$axios.get(`/api/section?path=resources&lang=${locale}&order=weight`)
    .then((resp)=>{
        this.resources = resp.data
    })
    .catch(err=>{
        this.error = err
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/base/_variables.scss";
@import "@/assets/scss/vendors/_include-media.scss";

#footer {
  background: $dark-blue;
  border-bottom: 5px solid $light-blue;
  padding: 42px 0;

  a{
    text-decoration: none;
    color: #f9f9f9;
  }
  .container {
    margin: 0 auto;
    padding: 0 15px;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .col {
    width: 100%;
    margin-right: 1em;
  }

  .contact-holder {
    padding: 25px 0 20px;

    @include media(">=phone") {
      padding: 44px 0 33px;
    }

    @include media(">=tablet") {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    @include media(">=desktop") {
      align-items: center;
    }
  }

  .info-block {
    margin-bottom: 20px;

    @include media(">=phone") {
      display: flex;
      align-items: center;
    }

    @include media(">=797px") {
      margin-bottom: 0;
      width: 60%;
    }
  }

  .form-block {
    @include media(">=797px") {
      width: 40%;
      display: flex;
      justify-content: flex-end;
    }
  }

  .logo {
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 108px;

    @include media(">=phone") {
      margin-bottom: 0;
    }
  }

  .subscribe-form {
    font-size: 14px;
    margin: 0;
    max-width: 329px;
    padding: 2px;

    .btn {
      padding: 12px 10px;
      text-transform: none;
      font-size: 14px;
      line-height: 1;
    }
  }
}

.footer-nav {
  padding-bottom: 20px;
  border-bottom: 1px solid rgba($white, 0.08);

  h5 {
    text-transform: uppercase;
    font-size: 15px;
    color: $white;
    font-weight: 500;
    margin-bottom: 19px;
  }

  .nav-list {
    padding-bottom: 15px;
    max-width: 170px;

    li {
      font-size: 14px;
      line-height: 1.35714285;
      margin-bottom: 8px;
    }

    a {
      color: rgba($white, 0.6);
      font-weight: 400;

      &:hover {
        color: $light-blue;
      }
    }
  }
}

.social-networks {
  @include media(">=phone") {
    width: calc(100% - 128px);
  }

  li {
    display: inline-block;
    vertical-align: top;
    color: $white;
    font-size: 14px;
    padding-right: 5px;
    padding-bottom: 10px;

    @include media(">=phone") {
      padding: 10px 5px 10px 0;
    }

    &:last-child {
      padding-right: 0;
    }

    a {
      padding: 8px 10px;
      display: block;
      border-radius: 4px;
      background: #0a2233;
      color: $white;

      &:hover {
        text-decoration: none;
        color: $light-blue;
      }

      .icon {
        padding-right: 10px;
      }
    }
  }
}
.credits {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  font-size: 0.8em;
  color: #f9f9f9;
  margin-top: 2em;
  padding: 2em;
}
</style>


<i18n>
{
  "en": {
    "company": "Company",
    "product": "Product",
    "useCases": "Case studies",
    "resources":"resources"
  },
  "fr": {
    "company":"Société",
    "product":"Produit",
    "useCases":"Cas pratiques",
    "resources":"resources"
  }
}
</i18n>