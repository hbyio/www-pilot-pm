<template>
<DetailLayout>
  <h1 slot="title">{{ title }}</h1>
  <p v-html="body" slot="body" />
</DetailLayout>
</template>

<script>
import DetailLayout from './_DetailLayout.vue'
import versionfr from "@/content/resources/guides.md";
import versionen from "@/content/resources/guides.en.md";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";


export default {
  components:{
    DetailLayout
  },
  data: () => {
    return {
      document: {
        matter: null,
        content: null
      },
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
  async asyncData(context) {
    let locale = context.app.i18n.locale;
    if (locale === "fr") {
      return { document: matter(versionfr) };
    } else {
      return { document: matter(versionen) };
    }
  }
};
</script>