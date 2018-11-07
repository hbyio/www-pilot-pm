<template>
  <DetailLayout :slug="slug">
      <h1 slot="title">{{ title }}</h1>
      <p slot="body" v-html="body"></p>
  </DetailLayout>
</template>

<script>
import DetailLayout from "@/layouts/detailResource.vue";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  xhtmlOut: false, // Use '/' to close single tags (<br />).
  // This is only for full CommonMark compatibility.
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true // Autoconvert URL-like text to links
});

export default {
  components: {
    DetailLayout
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