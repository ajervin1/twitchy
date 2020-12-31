<template>
	<div id="app" class="">
		
		<div class="dropdown">
			<button class="btn btn-primary " data-toggle="dropdown">
				Filter Clips By Time
			</button>
			<div class="dropdown-menu">
				<button @click="changePeriod(time.value)" class="dropdown-item" v-for="time in options">
					{{ time.name }}
				</button>
			</div>
			<span class="ml-2 badge badge-secondary badge-pill">
				{{ period.toUpperCase() }}
			</span>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'PeriodFilter',
		
		data () {
			return {
				options: [
					{
						value: 'day',
						name: 'Top Daily Clips'
					},
					{
						value: 'week',
						name: 'Top Weekly Clips'
					},
					{
						value: 'month',
						name: 'Top Monthly Clips'
					},
					{
						value: 'all',
						name: 'Top Clips All Time'
					}
					
				]
			}
		},
		computed: {
			cursor () {
				return this.$store.state.cursor
			},
			clips () {
				return this.$store.state.clips
			},
			period () {
				return this.$store.state.period
			}
		},
		methods: {
			changePeriod (time) {
				this.$store.dispatch('changePeriod', time)
			}
		},
		
		
	}
</script>
sty
