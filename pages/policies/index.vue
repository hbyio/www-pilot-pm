<template>
	<main id="main">
		<section class="intro-section ressources-page">
			<div class="container">
				<div class="text-holder">
					<h1>{{ $t('company') }}</h1>
					<p>{{ $t('companyPageShort') }}</p>
				</div>
			</div>
		</section>
		<section class="policies-section policies-page">
			<div class="container">
				<div class="row">
					<article class="col"
						v-for="article in section"
						:key="article.slug"
					>
						<div class="text-holder">
							<span class="label" :class="article.tagColor">{{ article.tag }}</span>
							<h6><a href="#">{{ article.title }}</a></h6>
							<p v-if="article.short">{{ article.short }}</p>
							<p v-else>version:{{ article.version }}&nbsp;&bull;&nbsp;{{article.date | formatDate}}</p>
						</div>
						<nuxt-link 
							:to="localePath({name: 'policies-slug', params: { slug: article.slug } },$i18n.locale)"
							class="button is-info is-medium is-fullwidth is-outlined" 
						>
							{{ $t('view') }}
						</nuxt-link>
					</article>
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
		let resp = await context.app.$axios.get(`/api/section?path=policies&lang=${locale}&order=weight`)
		return { section: resp.data };
	},
	head() {
		return {
			title: 'Pilot | '+this.$i18n.t('company'),
		}
	},
};
</script>

<i18n>
{
  "en": {
		"company": "Company",
		"companyPageShort": "Legal, administrative and technical documents"
  },
  "fr": {
		"company":"Société",
		"companyPageShort":"Documents juridiques, administratifs et techniques"
  }
}
</i18n>
<style lang="scss">
	@import "@/assets/scss/vendors/_include-media.scss";
	@import "@/assets/scss/base/_variables.scss";
	.policies-section {
		padding: 40px 0;

		@include media(">=tablet") {
			padding: 62px 0 94px;
		}

		h3 {
			margin-bottom: 25px;

			@include media(">=phone") {
				margin-bottom: 30px;
			}

			@include media(">=tablet") {
				margin-bottom: 51px;
			}
		}

		.container {
			max-width: 996px;
		}

		.row {
			@include media(">=phone") {
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				margin: 0 -10px;
			}

			@include media(">=tablet") {
				margin: 0 -20px;
			}

			@include media(">=desktop") {
				margin: 0 -40px;
			}
		}

		.col {
			font-size: 13px;
			color: #707070;
			margin: 0 auto 40px;
			position: relative;

			@include media(">=phone") {
				width: 50%;
				padding: 0 10px;
			}

			@include media(">=tablet") {
				padding: 0 15px;
				width: 33.3%;
				border-right: 1px solid $gray-light;
				margin: 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			@include media(">=desktop") {
				padding: 0 40px;
			}

			&:last-child {
				border-right: none;
			}

			.img-holder {
				background-size: cover;
				background-position: 50% 50%;
				background-repeat: no-repeat;
				min-height: 153px;
				border-radius: 4px;
				margin-bottom: 15px;

				@include media(">=tablet") {
					margin-bottom: 26px;
				}
			}

			h6 {
				font-size: $font-size-base;
				font-weight: 400;
				color: $gray;
				line-height: 1.16;
				margin-bottom: 10px;

				a {
					color: #3d3d3d;
					text-decoration: none;

					&:hover {
						color: #3276a6;
					}
				}

				@include media(">=tablet") {
					margin-bottom: 17px;
				}
			}

			p {
				margin-bottom: 15px;

				@include media(">=tablet") {
					margin-bottom: 26px;
				}
			}

			.btn-white {
				display: block;
				font-size: $font-size-base;
				font-weight: 400;
				text-align: center;

				@include media(">=tablet") {
					padding: 16px 19px;
				}
			}
		}

		&.policies-page {
			position: relative;

			.col {
				padding-bottom: 15px;

				@include media(">=tablet") {
					padding-bottom: 47px;
				}
			}

			h4 {
				text-align: center;
				line-height: 2.05;
				font-size: 20px;
				margin-bottom: 33px;
				font-weight: 400;
			}

			h6 {
				font-size: 18px;
				font-weight: 500;

				a {
					color: #3d3d3d;

					&:hover {
						color: #3276a6;
					}
				}
			}

			.label {
				margin-bottom: 13px;
			}

			.col {
				border-right: none;

				h6 {
					@include media(">=tablet") {
						margin-bottom: 15px;
					}
				}
			}

			.btn-holder {
				display: block;
				width: 100%;
				padding: 0;

				@include media(">=phone") {
					padding: 0 15px;
				}

				@include media(">=desktop") {
					padding: 0 40px;
				}
			}

			.img-holder {
				@include media(">=tablet") {
					margin-bottom: 11px;
				}

				.text-block {
					font-size: 22px;
					font-weight: 500;
					color: $white;
					padding: 16px;
				}
			}
		}

		&.blog-article-page {
			color: #555;
			font-weight: 400;
			line-height: 1.75;

			@include media(">=tablet") {
				padding: 56px 0 94px;
			}

			.time {
				margin-bottom: 7px;
			}

			.container {
				max-width: 939px;
			}

			.text-holder {
				max-width: 700px;
				margin: 0 auto;
				padding-bottom: 30px;
				margin-bottom: 43px;

				@include media(">=tablet") {
					margin-bottom: 43px;
					padding-bottom: 70px;
				}

				p {
					@include media(">=tablet") {
						margin-bottom: 28px;
					}
				}
			}

			h1 {
				@include media(">=tablet") {
					margin-bottom: 13px;
				}
			}

			.label {
				padding: 3px 9px;
			}

			h2 {
				font-family: $roboto-font;
				font-size: 26px;
				color: #131313;
				font-weight: 500;
				margin-bottom: 17px;
			}

			h4 {
				font-size: 20px;
				color: #202020;
				margin-bottom: 15px;

				@include media(">=tablet") {
					margin-bottom: 28px;
				}
			}
		}
	}
</style>
