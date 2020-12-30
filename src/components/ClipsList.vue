<template>
	<div class="row">
		<div class="col-4 mb-4" v-for="clip in clips">
			<article class="card h-100">
				<img :src="clip.thumbnails.medium" class="card-img-top">
				<div class="card-body py-2 pt-3">
					<h6>{{ clip.title }}</h6>
					<div class="clip-details font-small">
						<strong class="text-muted">Views: </strong>
						{{ clip.views }}
					</div>
				</div>
				<div class="card-footer py-1">
					<a :href="`/clips/${clip.slug}`" class="btn btn-primary btn-sm">
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
