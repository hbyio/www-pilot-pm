<template>
<main id="main">
    <section class="intro-section ressources-page ressources-detail-page">
        <div class="container">
            <div class="text-holder">
                <nuxt-link class="back" :to="localePath({name:'policies'}, $i18n.locale)">
                  <h4>{{ $t('company') }}</h4>
                </nuxt-link>
                <h1>{{ title }}</h1>
            </div>
        </div>
    </section>
    <section class="details-section container">
      <affix  class="js-mobilemenu"
              relative-element-selector=".js-content" 
              :offset="{ top: 80, bottom: 40 }" 
              :scroll-affix="true">
              <button class="button  is-info "
                      @click="toggleMobileMenu"
              >
                {{ $t('menu') }}
              </button>
      </affix>
      <div class="menu" :class="{isOpened:isMobileMenuOpen}" @click="toggleMobileMenu">
        <button class="button closeMenu is-fullwidth is-medium is-light" v-show="isMobileMenuOpen">
          {{ $t('close') }}
        </button>
        <affix  relative-element-selector=".js-content" 
                :offset="{ top: 80, bottom: 40 }" 
                :scroll-affix="false"
                :enabled="menuIsAffix">
          <scrollactive class="menu-list" :offset="80"
                        :duration="800"
                        bezier-easing-value=".5,0,.35,1">
            <nuxt-link  class="menu-item scrollactive-item"
                        v-for="heading in headings" 
                        :key="heading.hash"
                        :class="heading.tagName" 
                        :to="{hash:heading.id}">
                          {{heading.firstChild.data}}
            </nuxt-link>
          </scrollactive>
        </affix>
      </div>
      <div class="content-block js-content" v-html="body"></div>
    </section>
    <BlogSection></BlogSection>
</main>
</template>

<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import BlogSection from "@/components/blogSection.vue";

var string = require("string");

function legacySlugify(s) {
  return string(s)
    .slugify()
    .toString();
}

const md = MarkdownIt({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true // Autoconvert URL-like text to links
}).use(require("markdown-it-anchor"), {
  permalink: true,
  permalinkBefore: false,
  permalinkSymbol: "§",
  slugify: legacySlugify
});

export default {
  components: {
    BlogSection
  },
  data: () => {
    return {
      document: {},
      headings: [],
      isMobileMenuOpen:false,
    };
  },
  computed: {
    title() {
      return this.document.data.title;
    },
    body() {
      return md.render(this.document.content);
    },
    slug() {
      return this.$route.params.slug;
    },
    pageIcon() {
      return `icon-${this.slug}`;
    },
    menuIsAffix() {
      return this.$mq === 'desktop'
    }
  },
  mounted() {
    this.addListeners();
    var contentBlock = this.$el.querySelector(".content-block");
    this.headings = contentBlock.querySelectorAll("h1,h2,h3,h4,h5,h6");
    console.log(this.headings);
    //console.log(this.$route);
    //console.log(this);
    // if (this.$route.hash) {
    //   VueScrollTo.scrollTo(this.$route.hash);
    // }
  },
  beforeDestroy() {
    this.removeListeners();
  },
  watch: {
    content: "contentUpdated"
  },
  methods: {
    toggleMobileMenu(){
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    navigate(event) {
      const href = event.target.getAttribute("href");
      if (href && href[0] === "/") {
        event.preventDefault();
        var destination = href;
        if (this.$i18n.locale === "fr") {
          var destination = "/" + this.$i18n.locale + href;
        }
        this.$router.push(destination);
      }
    },
    contentUpdated() {
      this.removeListeners();
      this.$nextTick(() => {
        this.addListeners();
      });
    },
    addListeners() {
      this._links = this.$el.getElementsByTagName("a");
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener("click", this.navigate, false);
      }
    },
    removeListeners() {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener("click", this.navigate, false);
      }
      this._links = [];
    }
  },
  async asyncData(context) {
    const versionfr = await import(`@/content/policies/${
      context.params.slug
    }.md`);
    const versionen = await import(`@/content/policies/${
      context.params.slug
    }.en.md`);
    // console.log(versionfr.default)
    let locale = context.app.i18n.locale;
    if (locale === "fr") {
      return { document: matter(versionfr) };
    } else {
      return { document: matter(versionen) };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/vendors/_include-media.scss";
.back{
  text-decoration: none;
}
.details-section {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  @include media("<tablet") {
    position: relative !important;
    flex-direction: column;
  }
}
.js-mobilemenu{
  display:none;
  padding: 0 2em;
  justify-content: flex-end;
  align-items: flex-end;
  @include media("<tablet") {
    display: flex;
    &.affix{
      width: 100%;
      margin-top: 10px;
    }
  }
}

.menu {
  box-sizing: border-box;
  //border-right: 1px solid #eaecef;
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis:250px;
  .affix{
    width: 250px;
  }



  @include media("<tablet") {
    display: none;
    padding: 2em;
    position: fixed;
    top: 0;
    z-index: 100000000000;
    opacity: .98;
    background-color: #fff !important;
    width: 100%;
    height: 100%;
    &.isOpened{
      display: block;
    }
  }
  
}
.menu-list {
  display: flex;
  flex-direction: column;
  @include media("<tablet") {
    margin-top: 2em;
  }
  .menu-item{
    padding: 0.3em 1em;
    border-left:3px solid #eceff1;
    text-decoration: none;
    color: #546e7a;
    width: 100%;
    @include media("<tablet") {
      padding: 1em;
    }

    &:hover {
      background: #eceff1;
      border-left:3px solid #2196f3;
      color: #2196f3;
    }
    &.is-active {
      border-left:3px solid #2196f3;
      color: #2196f3;
      font-weight: 600;
    }
    &.H3 {
      padding-left: 2em;
    }

  }
}




.content-block {
  flex-grow: 4;
  max-width: 700px;
  @include media("<tablet") {
    padding: 2em;
  }
  >:first-child{
     margin-top:0; 
  }
  h2{
     margin-top:2em; 
     font-size: 1.85em;
     font-weight: 300;
     margin-bottom: .3em;
  }
  h3{
    margin-top: 1em;
    text-align: left;
    font-size: 1.55em;
    font-weight: 500;
    margin-bottom: .3em;
  }
}





</style>

