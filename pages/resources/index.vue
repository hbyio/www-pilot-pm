<template>
	<main id="main">
		<section class="intro-section ressources-page">
			<div class="container">
				<div class="text-holder">
					<h1 class="capitalize">{{ $t('resources') }}</h1>
					<p>{{ $t('resourcesShort') }}</p>
				</div>
			</div>
		</section>
		<section class="card-section">
			<div class="container">
				<div class="row card-holder">
					<div class="card"
								v-for="document in section"
								:key="document.slug"
								v-if="!document.draft"
					>
						<div class="card-heading" :style="{ 'background-image': 'url(' + document.illustration + ')' }">
							<div class="heading-text">
								<component v-if="document.iconComponent" :is="document.iconComponent" :height="24" :color="'#fff'"></component>
								<h6>{{ document.title }}</h6>
							</div>
						</div>
						<div class="card-body">
							<p>{{ document.short }}</p>
						</div>
						<div class="card-footer">
							<!-- <a href="#" class="ressources-link">13 ressources</a> -->
							<nuxt-link 
							  :to="localePath({name: 'resources-slug', params: { slug: document.slug } },$i18n.locale)"
							  class="button is-info is-medium is-fullwidth" 
							>
							  {{ $t('view') }}
							</nuxt-link>
						</div>
					</div>
					<!-- <div class="card">
						<div class="card-heading purple-overlay" style="background-image: url(/images/img-overlay-2.png)">
							<div class="heading-text">
								<i class="icon icon-projects" />
								<h6>Les projets</h6>
							</div>
						</div>
						<div class="card-body">
							<p>Vous pouvez rassembler vos contenus dans des projets pour organiser le travail de l’équipe</p>
						</div>
						<div class="card-footer">
							<a href="#" class="ressources-link">13 ressources</a>
							<nuxt-link 
							  :to="localePath({name: 'resources-slug', params: { slug:'projects' } },$i18n.locale)"
							  class="button is-info is-medium is-fullwidth" 
							>
							  {{ $t('view') }}
							</nuxt-link>
						</div>
					</div>
					<div class="card">
						<div class="card-heading blue-overlay" style="background-image: url(/images/img-overlay-3.png)">
							<div class="heading-text">
								<i class="icon icon-radio"></i>
								<h6>Les canaux</h6>
							</div>
						</div>
						<div class="card-body">
							<p>Pour Pilot un canal représente un espace où diffuser un contenu.</p>
						</div>
						<div class="card-footer">
							<a href="#" class="ressources-link">13 ressources</a>
						
							<nuxt-link 
							  :to="localePath({name: 'resources-slug', params: { slug:'channels' } },$i18n.locale)"
							  class="button is-info is-medium is-fullwidth" 
							>
							  {{ $t('view') }}
							</nuxt-link>
						</div>
					</div>
					<div class="card">
						<div class="card-heading green-overlay" style="background-image: url(/images/img-overlay-4.png)">
							<div class="heading-text">
								<i class="icon icon-ask"></i>
								<h6>Questions Fréquentes</h6>
							</div>
						</div>
						<div class="card-body">
							<p>Collection des questions que vous nous posez le plus souvent</p>
						</div>
						<div class="card-footer">
							<a href="#" class="ressources-link">13 ressources</a>
							<nuxt-link 
							  :to="localePath({name: 'resources-slug', params: { slug:'faq' } },$i18n.locale)"
							  class="button is-info is-medium is-fullwidth" 
							>
							  {{ $t('view') }}
							</nuxt-link>
						</div>
					</div>
					<div class="card">
						<div class="card-heading brown-overlay" style="background-image: url(/images/img-overlay-5.png)">
							<div class="heading-text">
								<i class="icon icon-book"></i>
								<h6>Les guides dans l’application</h6>
							</div>
						</div>
						<div class="card-body">
							<p>Vous pouvez rassembler vos contenus dans des projets pour organiser le travail de l’équipe</p>
						</div>
						<div class="card-footer">
							<a href="#" class="ressources-link">13 ressources</a>
							<nuxt-link 
							  :to="localePath({name: 'resources-slug', params: { slug:'guides' } },$i18n.locale)"
							  class="button is-info is-medium is-fullwidth" 
							>
							  {{ $t('view') }}
							</nuxt-link>
						</div>
					</div> -->
				</div>
				<ContactUs></ContactUs>
			</div>
		</section>
		<BlogSection></BlogSection>
	</main>
</template>
<script>
import BlogSection from "@/components/blogSection.vue";
import ContactUs from "@/components/ContactUs.vue"
import IconItems from "@/components/IconItems.vue"
import IconProjects from "@/components/IconProjects.vue"
import IconChannels from "@/components/IconChannels.vue"
import IconGuides from "@/components/IconGuides.vue"
import IconFaq from "@/components/IconFaq.vue"
export default {
  components: {
		BlogSection,
		ContactUs,
		IconItems,
		IconProjects,
		IconChannels,
		IconFaq,
		IconGuides
  },
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
		let resp = await context.app.$axios.get(`/api/section?path=resources&lang=${locale}&order=weight`)
		return { section: resp.data };
	}
};
</script>
<i18n>
	{
		"en":{
			"resourcesShort":"Documentation, guides, best practices, help ..."
		},
		"fr":{
			"resourcesShort":"Dcoumentation, guides, assistance ..."
		}
	}
</i18n>
