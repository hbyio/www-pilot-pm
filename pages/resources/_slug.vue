<template>
<main id="main">
    <section class="intro-section ressources-page ressources-detail-page">
        <div class="container">
            <div class="text-holder">
                <i class="icon-details" :class="pageIcon"></i>
                <h3> {{title}} </h3>
            </div>
        </div>
    </section>
    <section class="details-section container">
        <ContentMenu  class="menu"></ContentMenu>

        <div class="content-block" v-html="body"></div>
    </section>
    <BlogSection></BlogSection>
</main>
</template>

<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import BlogSection from "@/components/blogSection.vue";
import ContentMenu from "@/components/ContentMenu.vue";

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
  permalinkBefore: true,
  permalinkSymbol: "§",
  slugify: legacySlugify
});

export default {
  components: {
    BlogSection,
    ContentMenu
  },
  data: () => {
    return {
      document: {}
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
    const versionfr = await import(`@/content/resources/${
      context.params.slug
    }.md`);
    const versionen = await import(`@/content/resources/${
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

<style lang="scss" scoped>
.details-section {
  display: flex;
  flex-direction: row;
  .content-block {
    margin-left: 300px;
  }
}
</style>
