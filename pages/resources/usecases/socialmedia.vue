<template>
  <main id="main">
    <section class="intro-section ressources-page blog-article-page" style="background-image: url(/images/bg-intro.jpg)">
      <div class="container">
        <div class="text-holder">
          <span class="time">8 minutes reading</span>
          <h1>{{document.data.title}}</h1>
          <span class="label" :class="document.data.tagColor">{{document.data.tag}}</span>
        </div>
      </div>
    </section>
    <section class="blog-section blog-article-page">
      <div class="container">
        <div class="text-holder">
            <h1>Harmonie Mutuelle : Facebook régionaux</h1>

            <p>La direction digitale de la mutuelle coordonne, entre autres, la production et la publication sur facebook d'annonces de sponsoring sportifs locaux au d'évènements destinés à ses adhérents.</p>

            <p>La problématique était de faire circuler ces contenus entre le local qui organise et le national en charge de la rédaction et de la diffusion.</p>

            <p>Avec Pilot l'équipe en charge de ce projet peut :&nbsp;</p>

            <ul>
                <li>Recueillir une information locale qualifiée et pré-formatée pour le support final</li>
                <li>Faire rédiger, sur la base des informations collectées, le texte destiné à annoncer l'évènement</li>
                <li>Informer, par calendriers éditoriaux partagés, l'ensemble des parties prenantes sur l'état de la production en temps réél.</li>
                <li>Organiser la validation du contenu entre les diverses entités (locales, nationales et directions métiers)</li>
                <li>Transmettre les éléments finaux validés à l’agence en charge de la publication</li>
            </ul>

            <p>En centralisant les éléments sur une seule plateforme Harmonie Mutuelle a pu raccourcir considérablement ses temps de production.&nbsp;</p>

            <h1>Moët Hennessy : Produire pour les pages locales Linkedin à l’international</h1>

            <p>Moët Hennessy anime un espace Linkedin géo localisé en relation avec les équipes Japon, Chine et Canada.</p>

            <p>Les contenus sont produits sur la plateforme, à Paris. Ils sont ensuite distribués, toujours au sein de la plateforme, vers les équipes locales qui valident et s’approprient (traduction éventuelle) les contenus.&nbsp;</p>

            <p>En fin de processus de validation les contenus sont collectés par les équipes de community management pour publication.</p>
        </div>
        <CallToTrial></CallToTrial>
      </div>
    </section>
  </main>
</template>

<script>
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import BlogSection from "@/components/SectionBlog.vue";
import CallToTrial from '@/components/CallToTrial.vue'

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
    BlogSection,
    CallToTrial
  },
  data: () => {
    return {
      document: {
        data: {
          title:"Organiser sa production pour les réseaux sociaux : exemples d'Harmonie Mutuelle et Moët Hennessy",
          tag:"Retour d'expérience",
          tagColor:"purple"
        }
      },
    };
  },
  // computed: {
  //   title() {
  //     return this.document.data.title;
  //   },
  //   body() {
  //     return md.render(this.document.content);
  //   },
  //   slug() {
  //     return this.$route.params.slug;
  //   },
  //   pageIcon() {
  //     return `icon-${this.slug}`;
  //   },
  //   menuIsAffix() {
  //     return this.$mq === 'desktop'
  //   }
  // },
  // mounted() {
  //   this.addListeners();
  // },
  // beforeDestroy() {
  //   this.removeListeners();
  // },
  // watch: {
  //   content: "contentUpdated"
  // },
  // methods: {
  //   toggleMobileMenu(){
  //     this.isMobileMenuOpen = !this.isMobileMenuOpen
  //   },
  //   navigate(event) {
  //     const href = event.target.getAttribute("href");
  //     if (href && href[0] === "/") {
  //       event.preventDefault();
  //       var destination = href;
  //       if (this.$i18n.locale === "fr") {
  //         var destination = "/" + this.$i18n.locale + href;
  //       }
  //       this.$router.push(destination);
  //     }
  //   },
  //   contentUpdated() {
  //     this.removeListeners();
  //     this.$nextTick(() => {
  //       this.addListeners();
  //     });
  //   },
  //   addListeners() {
  //     this._links = this.$el.getElementsByTagName("a");
  //     for (let i = 0; i < this._links.length; i++) {
  //       this._links[i].addEventListener("click", this.navigate, false);
  //     }
  //   },
  //   removeListeners() {
  //     for (let i = 0; i < this._links.length; i++) {
  //       this._links[i].removeEventListener("click", this.navigate, false);
  //     }
  //     this._links = [];
  //   }
  // },
  // async asyncData(context) {
  //   let locale = context.app.i18n.locale;
  //   let resp = await context.app.$axios.get(`/api/content?path=${locale}/blog/${
  //     context.params.slug
  //   }.md`)
  //   return { document: matter(resp.data) };
  // },
  // head() {
  //   return {
  //     title: 'Blog | '+this.title,
  //   }
  // },
};
</script>
