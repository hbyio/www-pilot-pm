<template>
    <main id="main">
        <section class="intro-section ressources-page ressources-detail-page">
            <div class="container">
                <div class="text-holder">
                    <i class="icon-details" :class="pageIcon"></i>
                    <h3> <slot name="title"></slot> </h3>
                </div>
            </div>
        </section>
        <section class="details-section container">
            <ContentMenu  class="menu"></ContentMenu>

            <div class="content-block">
                <slot name="body"></slot>
            </div>
        </section>
        <BlogSection></BlogSection>
    </main>
</template>

<script>
import BlogSection from "./blogSection.vue";
import ContentMenu from "@/components/ContentMenu.vue";

export default {
  name: "DetailResource",
  components: {
    BlogSection,
    ContentMenu
  },
  props: {
    slug: {
      required: true
    }
  },
  computed: {
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

        console.log(this.$i18n);
        console.log(this);
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
  }
};
</script>

<style lang="scss" scoped>
.withmenu {
  display: flex;
  flex-direction: row;
}
.details-section {
  display: flex;
  flex-direction: row;
  .content-block {
    margin-left: 300px;
  }
}
</style>
