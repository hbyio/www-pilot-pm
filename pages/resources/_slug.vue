<template>
  <DetailLayout>
      <h1 slot="title">{{ title }}</h1>
      <p slot="body" v-html="body"></p>
  </DetailLayout>
</template>

<script>
import DetailLayout from './_DetailLayout.vue'
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default {
  components:{
    DetailLayout
  },
  data: () => {
    return {
      document: {},
      cont: null
    };
  },
  computed: {
    title() {
      return this.document.data.title;
    },
    body() {
      var md = new MarkdownIt();
      return md.render(this.document.content);
    }
  },
  async asyncData (context) {
    const versionfr = await import(`@/content/resources/${context.params.slug}.md`)
    const versionen = await import(`@/content/resources/${context.params.slug}.en.md`)
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