<template>
<main id="main">
    <section class="intro-section ressources-page ressources-detail-page">
        <div class="container">
            <div class="text-holder">
                <component v-if="document.data.iconComponent" :is="document.data.iconComponent" :height="24" :color="'#fff'"></component>
                <h1> {{title}} </h1>
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
import BlogSection from "@/components/SectionBlog.vue";
import IconItems from "@/components/IconItems.vue"
import IconProjects from "@/components/IconProjects.vue"
import IconChannels from "@/components/IconChannels.vue"
import IconFaq from "@/components/IconFaq.vue"
import IconGuides from "@/components/IconGuides.vue"

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
    BlogSection,
    IconItems,
    IconProjects,
    IconChannels,
    IconFaq,
    IconGuides
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
    let locale = context.app.i18n.locale;
    let resp = await context.app.$axios.get(`/api/content?path=${locale}/resources/${
      context.params.slug
    }.md`)
    return { document: matter(resp.data) };
  },
  head() {
    return {
        title: 'Pilot | '+this.title,
        meta: [
            { hid: "description", name: "description", content: this.$i18n.t('resourcesShort') }
        ],
    }
  },
};
</script>
