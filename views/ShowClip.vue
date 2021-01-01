<template>
	<main>
		<div class="embed-responsive embed-responsive-21by9">
			<iframe :src="embed_url" frameborder="0"></iframe>
		</div>
		<button class="btn btn-primary mt-3" @click="back">Back</button>
	</main>
</template>

<script>
	export default {
		name: 'ShowClip',
		data () {
			return {
				url: 'https://clips.twitch.tv/embed?clip='
			}
		},
		methods: {
			back () {
				this.$router.push('/')
			}
		},
		computed: {
			embed_url () {
				return this.url + this.$route.params.slug + '&parent=https://twitchy.netlify.app/'
			},
			clip () {
				return this.$store.state.clips.find(clip => clip.slug === this.$route.params.slug)
			}
		}
	}
</script>
