<template>
  <main id="main">
    <section class="intro-section ressources-page blog-article-page" style="background-image: url(/images/bg-intro.jpg)">
      <div class="container">
        <div class="text-holder">
          <span class="time">8 minutes reading</span>
          <h1>{{document.data.title}}</h1>
          <span class="label" :class="document.data.tagColor">{{document.data.tag}}</span>
          <ul class="info-list">
            <li><img :src="document.data.authorAvatar" :alt="document.author"></li>
            <li>{{document.data.author}}</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="blog-section blog-article-page">
      <div class="container">
        <div class="text-holder" v-html="body">
        </div>
        <CallToTrial></CallToTrial>
      </div>
    </section>
  </main>
</template>

<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import BlogSection from "@/components/SectionBlog.vue";
import CallToTrial from '@/components/CallToTrial.vue'

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
    CallToTrial
  },
  data: () => {
    return {
      document: {},
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
    let resp = await context.app.$axios.get(`/api/content?path=${locale}/blog/${
      context.params.slug
    }.md`)
    return { document: matter(resp.data) };
  },
  head() {
    return {
      title: 'Blog | '+this.title,
    }
  },
};
</script>
