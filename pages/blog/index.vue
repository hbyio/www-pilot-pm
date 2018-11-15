<template>
	<main id="main">
		<section class="intro-section ressources-page">
			<div class="container">
				<div class="text-holder">
					<h1>Blog</h1>
					<p>{{ $t('blogShort') }}</p>
				</div>
			</div>
		</section>
		<section class="blog-section blog-page">
			<div class="container">
				<article class="comment-block" v-for="article in section" :key="article.slug" v-if="article.featured">
					<a href="#" class="wrap">
						<div class="img-block" :style="{ 'background-image': 'url(' + article.illustration + ')' }"></div>
						<div class="text-block">
							<div class="heading">
								
								<nuxt-link 
									:to="localePath({name: 'blog-slug', params: { slug: article.slug } },$i18n.locale)"
									class="" 
								>
									<h1>{{ article.title }}</h1>
								</nuxt-link>
							</div>
							<span class="label" :class="article.tagColor">{{ article.tag }}</span>
							<p>{{ article.short }}</p>
							<ul class="info-list">
								<li><img :src="article.authorAvatar" alt="image description"></li>
								<li>{{ article.author }}</li>
								<li class="time">8 minuts read</li>
							</ul>
						</div>
					</a>
				</article>
				<h4>{{ $t('lastArticles') }}</h4>
				<div class="row">
					<article class="col"
							v-for="article in section"
							:key="article.slug"
							v-if="!article.draft"
					>
						<div class="text-holder">
							<div class="img-holder" :style="{ 'background-image': 'url(' + article.illustration + ')' }">
							</div>
							<span v-if="article.tag" class="label" :class="article.tagColor">{{ article.tag }}</span>
							<span v-else class="label">oh cool</span>
							<h6>
								<nuxt-link 
									:to="localePath({name: 'blog-slug', params: { slug: article.slug } },$i18n.locale)">
									{{ article.title }}
								</nuxt-link>
							</h6>
							<p>{{ article.short }}</p>
						</div>
						<nuxt-link 
							:to="localePath({name: 'blog-slug', params: { slug: article.slug } },$i18n.locale)"
							class="button is-info is-medium is-fullwidth is-outlined" 
						>
							{{ $t('read') }}
						</nuxt-link>
					</article>
					
					<!-- <div class="btn-holder">
						<a href="#" class="btn btn-white btn-more">Show more</a>
					</div> -->
				</div>

			</div>
		</section>
	</main>
</template>
<script>
export default {
	data: () => {
		return {
			section: []
		};
	},
	mounted() {
		this.$nextTick(() => {
		this.$nuxt.$loading.start();
		setTimeout(() => this.$nuxt.$loading.finish(), 200);
		});
	},
  	async asyncData(context) {
		let locale = context.app.i18n.locale;
		let resp = await context.app.$axios.get(`/api/section?path=blog&lang=${locale}&order=date`)
		return { section: resp.data };
	},
	head() {
		return {
			title: 'Pilot Blog',
		}
	},
};
</script>
<style lang="scss">
.heading{
	a {
		text-decoration: none;
	}
	h1{
		color: black;
		line-height: 1.1em;
		
	}
}
</style>
<i18n>
	{
		"en":{
			"read":"read",
			"blogShort":"News, announcements, thoughts and all kinds of things",
			"lastArticles":"Recent articles"
		},
		"fr":{
			"read":"lire",
			"blogShort":"Nouvelles fonctionnalités, curation, réflexions et toutes sortes de choses",
			"lastArticles":"Derniers articles"
		}
	}
</i18n>
