<template>
	<div class="row">
		<div class="col-4 mb-4" v-for="clip in clips">
			<article class="card h-100">
				<img :src="clip.thumbnails.medium" class="card-img-top">
				<div class="card-body py-2 pt-3">
					<h6 class="mb-0">{{ clip.title }}</h6>
					<div class="clip-details font-small">
						<strong>Views </strong>{{ clip.views }}
					</div>
					<a :href="`/clips/${clip.slug}`"
					   class="mt-2 btn btn-primary btn-sm font-size-xs">
						View Clip
					</a>
				</div>
			
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ClipsList',
		data () {
			return {}
		},
		computed: {
			clips () {
				return this.$store.state.clips
			}
		}
	}
</script>
