<template>
	<div id="app" class="">
		<GamesFilter/>
		<PeriodFilter class="my-4"/>
		<ClipsList/>
		
		<button @click="loadMore" class="btn btn-secondary mt-2 d-block mx-auto">
			Load Next Clips
		</button>
	</div>
</template>

<script>
	
	
	
	
	import PeriodFilter from '../src/components/filters/PeriodFilter'
	import ClipsList from '../src/components/ClipsList'
	import GamesFilter from '../src/components/filters/GamesFilter'
	
	export default {
		name: 'Home',
		components: { GamesFilter, ClipsList, PeriodFilter },
		
		methods: {
			async loadMore () {
				await this.$store.dispatch('nextClips')
			}
		},
		
		
	}
</script>
sty
