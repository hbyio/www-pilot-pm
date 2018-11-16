<template>
  <main id="main">
    <section class="intro-section homepage">
      <div class="container">
        <div class="text-holder">
          <h1 v-html="$t('home.title')"></h1>
          <p>{{ $t('home.catchphrase') }}</p>
        </div>
        <div class="relative-holder">
          <ButtonStartTrial buttonClasses="is-info is-medium"></ButtonStartTrial>
          <img src="/images/image-01.png" alt="image description">
          <ul class="tag-block">
            <li>
              <div class="img-holder">
                <img src="/images/icon-03.svg" width="37" height="44" alt="image description">
              </div>
              <strong class="title capitalize">{{ $t('planning') }}</strong>
            </li>
            <li>
              <div class="img-holder">
                <img src="/images/icon-02.svg" width="50" height="55" alt="image description">
              </div>
              <strong class="title capitalize">{{ $t('tasks') }}</strong>
            </li>
            <li>
              <div class="img-holder">
                <img src="/images/icon-01.svg" width="54" height="54" alt="image description">
              </div>
              <strong class="title capitalize">{{ $t('calendars') }}</strong>
            </li>
            <li>
              <div class="img-holder">
                <img src="/images/icon-04.svg" width="68" height="52" alt="image description">
              </div>
              <strong class="title capitalize">{{ $t('versionning') }}</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section id="functionality-section" class="functionality-section">
      <div class="container">
        <h1 class="capitalize">{{ $t('features') }}</h1>
        <span class="subtitle"></span>
      </div>
      <div class="relative-holder">
        <div class="container">
          <div class="row reverse">
            <div class="col">
              <div class="title-holder">
                <div class="icon-holder blue-holder">
                  <i class="icon-pen"></i>
                </div>
                <h2 class="capitalize">{{ $t('annotations') }}</h2>
              </div>
              <p>{{ $t('annotationsShort') }}</p>
            </div>
            <div class="col">
              <img src="/images/image-02.png" alt="image description">
            </div>
          </div>
          <div class="row">
            <div class="col col-sm">
              <div class="title-holder">
                <div class="icon-holder green-holder">
                  <i class="icon-flag"></i>
                </div>
                <h2 class="capitalize">{{ $t('workflows') }}</h2>
              </div>
              <p>{{ $t('workflowsShort') }}</p>
            </div>
            <div class="col">
              <img src="/images/image-03.png" alt="image description">
            </div>
          </div>
          <div class="row reverse">
            <div class="col">
              <div class="title-holder">
                <div class="icon-holder yellow-holder">
                  <i class="icon-check-2"></i>
                </div>
                <h2 class="capitalize">{{ $t('tasks') }}</h2>
              </div>
              <p>{{ $t('tasksShort') }}</p>
            </div>
            <div class="col">
              <img src="/images/image-04.png" alt="image description">
            </div>
          </div>
          <div class="row">
            <div class="col col-sm">
              <div class="title-holder">
                <div class="icon-holder purple-holder">
                  <i class="icon-projects"></i>
                </div>
                <h2 class="capitalize">{{ $t('projects') }}</h2>
              </div>
              <p>{{ $t('projectsShort') }}</p>
            </div>
            <div class="col">
              <img src="/images/image-05.png" alt="image description">
            </div>
          </div>
          <div class="row reverse">
            <div class="col">
              <div class="title-holder">
                <div class="icon-holder pink-holder">
                  <i class="icon-plan"></i>
                </div>
                <h2 class="capitalize">{{ $t('calendars') }}</h2>
              </div>
              <p>{{ $t('calendarsShort') }}</p>
            </div>
            <div class="col">
              <img src="/images/image-06.png" alt="image description">
            </div>
          </div>
          <div class="row">
            <div class="col col-sm">
              <div class="title-holder">
                <div class="icon-holder purple-holder">
                  <i class="icon-papers"></i>
                </div>
                <h2 class="capitalize">{{ $t('versions') }}</h2>
              </div>
              <p>{{ $t('versionsShort') }}</p>
              <!-- <a href="#" class="btn">{{ $t('view') }} <i class="icon-arrow-right"></i></a> -->
            </div>
            <div class="col">
              <img src="/images/image-07.png" alt="image description">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="clients-section" class="partners-section">
      <div class="container">
        <h1>Clients</h1>
        <span class="subtitle"></span>
        <ul class="logo-list">
          <li><img src="/images/logo-02.png" width="160" height="73" class="grayscale" alt="Harmonie mutuelle"></li>
          <li><img src="/images/logo-03.png" width="133" height="36" class="grayscale" alt="VINCI construction"></li>
          <li><img src="/images/logo-04.png" width="150" height="53" class="grayscale" alt="BANQUE POPULAIRE MEDITERRANEE"></li>
          <li><img src="/images/logo-05.png" width="80" height="74" class="grayscale" alt="SUEZ"></li>
          <li><img src="/images/logo-06.png" width="146" height="33" class="grayscale" alt="EDHEC business school"></li>
        </ul>
      </div>
    </section>
    <section class="contact-us">
      <div class="container">
        <h1>{{ $t('home.doNotWait') }}</h1>
        <span class="subtitle">{{ $t('home.startTrialNow') }}</span>
        <div class="form-holder">
          <div class="col">
            <h4>{{ $t('home.benefits.title') }}</h4>
            <ul class="check-list">
              <li>{{ $t('home.benefits.onePlace') }}</li>
              <li>{{ $t('home.benefits.sourceTruth') }}</li>
              <li>{{ $t('home.benefits.noMoreExcel') }}</li>
              <li>{{ $t('home.benefits.WhoWhatWhen') }}</li>
              <li>{{ $t('home.benefits.shortLifecycle') }}</li>
            </ul>
          </div>
          <div class="col">
            <h4>{{ $t('home.daysOnUs') }}</h4>
            <div class="text-holder">
              <ButtonStartTrial buttonClasses="is-info is-fullwidth"></ButtonStartTrial>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="prices-section" class="prices-section">
      <div class="container">
        <h1 class="capitalize">{{ $t('prices') }}</h1>
        <span class="subtitle">{{ $t('home.startTrialNow') }}</span>
        <div class="row">
          <div class="col">
            <div class="info-block">
              <div class="info-head">
                <h4>Small</h4>
                <span class="comment">{{ $t('home.smallIsFor') }}</span>
                <div class="price-info">
                  <strong class="price">9€</strong>
                  <div class="text-holder">
                    <p>/{{ $t('month') }}<br>/{{ $t('user') }}</p>
                  </div>
                </div>
              </div>
              <div class="info-list">
                <div>5 {{ $t('projects') }}</div>
                <div>100 {{ $t('items') }}</div>
                <div>10G {{ $t('storage') }}</div>
              </div>
              <div class="btn-holder">
                <ButtonStartTrial buttonClasses="is-light"></ButtonStartTrial>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="info-block active-block">
              <div class="info-head">
                <h4>Medium</h4>
                <span class="comment">{{ $t('home.mediumIsFor') }}</span>
                <div class="price-info">
                  <strong class="price">19€</strong>
                  <div class="text-holder">
                    <p>/{{ $t('month') }}<br>/{{ $t('user') }}</p>
                  </div>
                </div>
              </div>
              <div class="info-list">
                <div>10 {{ $t('projects') }}</div>
                <div>300 {{ $t('items') }}</div>
                <div>30Go {{ $t('storage') }} </div>
                <!-- <div>{{ $t('featuresNone') }}</div> -->
                <div>{{ $t('home.support.medium') }}</div>
              </div>
              <div class="btn-holder">
                <ButtonStartTrial></ButtonStartTrial>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="info-block">
              <div class="info-head">
                <h4 class="capitalize">{{ $t('enterprise') }}</h4>
                <span class="comment">{{ $t('home.enterpriseIsFor') }}</span>
                <div class="price-info">
                  <strong class="price">39€</strong>
                  <div class="text-holder">
                    <p>/{{ $t('month') }}<br>/{{ $t('user') }}</p>
                  </div>
                </div>
              </div>
              <div class="info-list">
                <div class="capitalize">{{ $t('projectsUnlimited') }}</div>
                <div class="capitalize">{{ $t('itemsUnlimited') }}</div>
                <div>1To {{ $t('storage') }}</div>
                <div>{{ $t('featuresAdvanced') }}</div>
                <div>{{ $t('home.support.advanced') }}</div>
              </div>
              <div class="btn-holder">
                <ButtonStartTrial buttonClasses="is-light"></ButtonStartTrial>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import ButtonStartTrial from '@/components/ButtonStartTrial.vue'
import VueScrollTo from 'vue-scrollto';
export default {
  components:{
    ButtonStartTrial
  },
  watch:{
    $route(newval, oldval){
      if(newval.hash){
        VueScrollTo.scrollTo(newval.hash)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 200);
    });

    if(this.$route.hash){
      VueScrollTo.scrollTo(this.$route.hash)
    }
    
  }
};
</script>