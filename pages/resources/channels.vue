<template>
<div>
  <h1>{{ title }}</h1>
  <p v-html="body" />
</div>
</template>

<script>
import versionfr from "@/content/resources/channels.md";
import versionen from "@/content/resources/channels.en.md";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

export default {
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
  asyncData(context) {
    console.log(context.app);
    let locale = context.app.i18n.locale;
    // This line could be delete if all filename were hamronized : myfile.fr.md and myfile.en.md
    let urlPiece = locale === "fr" ? "" : "." + locale;
    let url = `/content/resources/channels${urlPiece}.md`;
    return context.app.$axios
      .get(url)
      .then(resp => {
        return { document: matter(resp.data) };
      })
      .catch(err => console.log(err));
  }
};
</script>