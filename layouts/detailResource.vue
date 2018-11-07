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
        <section class="details-section">
            <div class="container">
                <aside class="sidebar">
                    <div class="heading">
                        <h6>Table de matières</h6>
                    </div>
                    <ul class="page-nav">
                        <li><a href="#">Créer un contenu</a></li>
                        <li><a href="#">Vue de détail d’un contenu</a></li>
                        <li><a href="#">Les outils spécifiques aux contenus</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Versions et différences</a></li>
                        <li><a href="#">Commentaires</a></li>
                        <li><a href="#">Tâches</a></li>
                        <li><a href="#">Partage</a></li>
                        <li><a href="#">Fichiers liés</a></li>
                    </ul>
                </aside>
                <div class="content-block">
                    <slot name="body"></slot>
                </div>
            </div>
        </section>
        <BlogSection></BlogSection>
    </main>
</template>

<script>
import BlogSection from "./blogSection.vue";

export default {
  name: "DetailResource",
  components: {
    BlogSection
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
        this.$router.push(href);
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
