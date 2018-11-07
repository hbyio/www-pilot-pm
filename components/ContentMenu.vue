<template>
    <aside :class="{'sticky':stickIt}">
        <!-- menu -->
    </aside>
</template>
<script>
import tocbot from "tocbot";
export default {
  name: "ContentMenu",
  data() {
    return {
      myStyle: {},
      originalTop: 0,
      scrollY: null,
      stickIt: false
    };
  },
  mounted() {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: ".menu",
      // Where to grab the headings to build the table of contents.
      contentSelector: ".content-block",
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1, h2, h3, h4, h5, h6",
      // Headings that match the ignoreSelector will be skipped.
      ignoreSelector: ".js-toc-ignore",
      // Main class to add to links.
      linkClass: "toc-link",
      // Extra classes to add to links.
      extraLinkClasses: "",
      // Class to add to active links,
      // the link corresponding to the top most heading on the page.
      activeLinkClass: "is-active-link",
      // Main class to add to lists.
      listClass: "toc-list",
      // Extra classes to add to lists.
      extraListClasses: "",
      // Class that gets added when a list should be collapsed.
      isCollapsedClass: "is-collapsed",
      // Class that gets added when a list should be able
      // to be collapsed but isn't necessarily collpased.
      collapsibleClass: "is-collapsible",
      // Class to add to list items.
      listItemClass: "toc-list-item",
      // How many heading levels should not be collpased.
      // For example, number 6 will show everything since
      // there are only 6 heading levels and number 0 will collpase them all.
      // The sections that are hidden will open
      // and close as you scroll to headings within them.
      collapseDepth: 0,
      // Smooth scrolling enabled.
      scrollSmooth: true,
      // Smooth scroll duration.
      scrollSmoothDuration: 420,
      // Callback for scroll end.
      scrollEndCallback: function(e) {},
      // Headings offset between the headings and the top of the document (this is meant for minor adjustments).
      headingsOffset: 1,
      // Timeout between events firing to make sure it's
      // not too rapid (for performance reasons).
      throttleTimeout: 50,
      // Element to add the positionFixedClass to.
      positionFixedSelector: null,
      // Fixed position class to add to make sidebar fixed after scrolling
      // down past the fixedSidebarOffset.
      positionFixedClass: "is-position-fixed",
      // fixedSidebarOffset can be any number but by default is set
      // to auto which sets the fixedSidebarOffset to the sidebar
      // element's offsetTop from the top of the document on init.
      fixedSidebarOffset: "auto",
      // includeHtml can be set to true to include the HTML markup from the
      // heading node instead of just including the textContent.
      includeHtml: false,
      // onclick function to apply to all links in toc. will be called with
      // the event as the first parameter, and this can be used to stop,
      // propagation, prevent default or perform action
      onClick: false,
      // orderedList can be set to false to generate unordered lists (ul)
      // instead of ordered lists (ol)
      orderedList: true
    });
    this.originalTop = this.$el.getBoundingClientRect().top;
    window.addEventListener(["scroll"], event => {
      this.scrollY = Math.round(window.scrollY);
    });
    window.addEventListener(["load"], event => {
      this.scrollY = Math.round(window.scrollY);
    });
  },
  watch: {
    scrollY(newValue) {
      const rect = this.$el.getBoundingClientRect();
      const newTop = this.scrollY + +this.top - this.originalTop;
      if (newValue > 200) {
        this.stickIt = true;
      } else {
        this.stickIt = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  top: 280px;
  max-width: 300px;
}
.sticky {
  position: fixed;
  top: 70px;
}
@import "~tocbot/src/scss/tocbot.scss";
h1::before,
h2::before,
h3::before,
h4::before,
h5::before,
h6::before {
  display: block;
  content: " ";
  height: 150px;
  margin-top: -90px;
  visibility: hidden;
}
</style>

