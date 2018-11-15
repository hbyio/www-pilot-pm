<template>
<section class="blog-section">
    <div class="container">
        <h3>{{ $t('lastNotes') }}</h3>
        <div class="row">
            <div class="col"
                v-for="article in section"
                :key="article.slug"
                v-if="!article.draft"
            >
                <div class="text-holder">
                    <div class="img-holder" :style="{ 'background-image': 'url(' + article.illustration + ')' }">
                    </div>
                    <h6>
                        <nuxt-link :to="localePath({name: 'blog-slug', params: { slug: article.slug } },$i18n.locale)">
                            {{ article.title }}
                        </nuxt-link>
                    </h6>
                    <p>{{article.short}}</p>
                </div>
                <nuxt-link 
                    class="button is-light is-fullwidth"
                    :to="localePath({name: 'blog-slug', params: { slug: article.slug } },$i18n.locale)">
                    {{ $t('read') }}
                </nuxt-link>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    name:"BlogSection",
	data: () => {
		return {
            section: [],
            error:null
		};
	},
  	mounted() {
		let locale = this.$i18n.locale;
        this.$axios.get(`/api/section?path=blog&lang=${locale}&order=date&slice=3`)
        .then((resp)=>{
            this.section = resp.data
        })
        .catch(err=>{
            this.error = err
        })
		
	}
};
</script>

<i18n>
{
    "en":{"lastNotes":"Recent articles from the blog"},
    "fr":{"lastNotes":"Retrouvez nos articles sur le blog"}
}
</i18n>

