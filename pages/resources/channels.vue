<template>
<div>
  <h1>{{ title }}</h1>
  <p v-html="body" />>
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
      txt: {}
    };
  },
  computed: {
    title() {
      return this.txt.fr.matter.data.title;
    },
    body() {
      return this.txt.fr.content;
    }
  },
  created() {
    var md = new MarkdownIt();
    this.txt.fr = {};
    this.txt.en = {};
    this.txt.fr.matter = matter(versionfr);
    this.txt.fr.content = md.render(matter(versionfr).content);
    this.txt.en.matter = matter(versionen);
    this.txt.en.content = md.render(matter(versionen).content);
  }
};
</script>