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
 

      <div class="menu">
        <affix  relative-element-selector="#example-content" :offset="{ top: 70, bottom: 40 }" :scroll-affix="false">
          <scrollactive class="menu-list" :offset="80">
            <nuxt-link class="menu-item scrollactive-item" v-for="heading in headings" :key="heading.hash" :class="heading.tagName" :to="{hash:heading.id}">
                 {{heading.firstChild.data}}
            </nuxt-link>
          </scrollactive>
        </affix>
      </div>
    

      <div id="example-content"  class="content-block js-toc-content" v-html="body"></div>
    </section>
    <BlogSection></BlogSection>
</main>
</template>

<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import tocbot from "tocbot";
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
      headings: []
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
    var contentBlock = document.querySelector(".content-block");
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

<style lang="scss">
.details-section {
  display: flex;
  justify-content: space-between;

  .menu {
    flex-shrink: 0;
    position: absolute;
    a.H3 {
      padding-left: 1em;
    }
  }
  .menu-list {
    display: flex;
    flex-direction: column;
  }
  .content-block {
    max-width: 700px;
    margin-left: 300px;
  }
}

.is-active {
  background-color: #2196f3;
  color: white;
}
</style>

