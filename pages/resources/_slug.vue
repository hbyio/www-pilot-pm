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
        <aside class="menu toc js-toc transition--300"></aside>
        <div class="content-block js-toc-content" v-html="body"></div>
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
  permalinkBefore: true,
  permalinkSymbol: "§",
  slugify: legacySlugify
});

export default {
  components: {
    BlogSection
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
    tocbot.init({
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1, h2, h3, h4,h5,h6",
      // How many heading levels should not be collpased.
      // For example, number 6 will show everything since
      // there are only 6 heading levels and number 0 will collpase them all.
      // The sections that are hidden will open
      // and close as you scroll to headings within them.
      collapseDepth: 6,
      // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
      headingsOffset: 1,
      // Timeout between events firing to make sure it's
      // not too rapid (for performance reasons).
      throttleTimeout: 50,
      // Element to add the positionFixedClass to.
      positionFixedSelector: ".toc",
      // Fixed position class to add to make sidebar fixed after scrolling
      // down past the fixedSidebarOffset.
      positionFixedClass: "is-menu-fixed",
      // fixedSidebarOffset can be any number but by default is set
      // to auto which sets the fixedSidebarOffset to the sidebar
      // element's offsetTop from the top of the document on init.
      fixedSidebarOffset: "auto",
      // orderedList can be set to false to generate unordered lists (ul)
      // instead of ordered lists (ol)
      orderedList: false
    });
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
  .toc {
    width: 300px;
    padding-right: 20px;
    flex-shrink: 0;
    flex-basis: 300px;
    position: absolute !important;
  }
  .content-block {
    max-width: 700px;
    margin-left: 300px;
  }
}
.menu > ul {
  padding-left: 10px;
}
.menu > li {
  height: 2em;
}
.toc.is-menu-fixed {
  position: fixed !important;
  top: 54px;
}
.toc-list {
  list-style: none;
  .toc-list-item {
    a {
      padding-left: 0.5em;
      border-left: 3px solid #fafafa;
      text-decoration: none;
      color: #546e7a;
      height: 2em;
    }
    a:hover {
      background-color: #fafafa;
    }
  }
  a.is-active-link {
    border-left: 3px solid #2196f3;
  }
}
</style>
<style scoped>
h1::before,
h2::before,
h3::before,
h4::before,
h5::before,
h6::before {
  display: block;
  content: " ";
  height: 60px;
  margin-top: 60px;
  visibility: hidden;
}
</style>
