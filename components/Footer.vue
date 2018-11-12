<template>
    <footer id="footer">
      <div class="footer-nav">
        <div class="container">
          <div class="row">
            <div class="col">
              <h5>{{ $t('resources') }}</h5>
              <ul class="nav-list">
                <li><a href="#">Les contenus</a></li>
                <li><a href="#">Les projets</a></li>
                <li><a href="#">Questions fréquentes</a></li>
                <li><a href="#">Les guides dans l’application</a></li>
                <li><a href="#">Les canaux</a></li>
              </ul>
            </div>
            <div class="col">
              <h5>{{ $t('useCases') }}</h5>
              <ul class="nav-list">
                <li><a href="#">Organiser son workflow de contenus</a></li>
                <li><a href="#">Refondre un site internet</a></li>
                <li><a href="#">Accompagner son équipe sur la plateforme</a></li>
              </ul>
            </div>
            <div class="col">
              <h5>{{ $t('company') }}</h5>
              <ul class="nav-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Mentions légales</a></li>
                <li><a href="#">Service Level Agreement</a></li>
                <li><a href="#">Les guides dans l’application</a></li>
                <li><a href="#">Infra & Sécurité</a></li>
              </ul>
            </div>
            <div class="col">
              <h5>{{ $t('product') }}</h5>
              <ul class="nav-list">
                <li><a href="#">Les Fonctionnalités</a></li>
                <li><a href="#">Nos Tarifs</a></li>
                <li><a href="#">Nos Clients</a></li>
                <li><a href="#">Cas Pratiques</a></li>
              </ul>
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
            <!-- <NewsletterSignup></NewsletterSignup> -->
          </div>
        </div>
      </div>
      <div class="credits">© Huckleberry 2018 🤖 🚀 - SIRET 79817197100012 - TVA FR18798171971 - Fabriqué en Europe 🇪🇺 / 🇫🇷 .</div>
    </footer>
</template>
<script>
import NewsletterSignup from '@/components/NewsletterSignup.vue'
export default {
  name:"Footer",
  components:{
    NewsletterSignup
  }
}
</script>

<style lang="scss" scoped>
.credits{
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