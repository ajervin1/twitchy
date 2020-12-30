<template>
	<section class="">
		<h5 class="text-secondary font-weight-bold"> Filter Clips By Game</h5>
		<!--Filter-->
		<div  class="d-flex align-items-center">
			<div>
				<button class="btn btn-primary btn-sm" @click="prev">
					Prev
				</button>
			</div>
			<ul class="d-flex list-unstyled align-items-center mb-0 pl-2">
				<li v-for="game in games" class="d-flex align-items-center text-sm mr-4">
					<a class="badge badge-success badge-pill"
					   @click="changeGame(game.name)">
						{{ game.name }}
					</a>
				</li>
			</ul>
			
			<div>
				<button class="btn btn-primary btn-sm" @click="next">
					Next
				</button>
			</div>
		</div>
	</section>
	
</template>

<script>
	export default {
		name: 'GamesFilter',
		data () {
			return {
				after: 0
			}
		},
		computed: {
			game () {
				return this.$store.state.game
			},
			games () {
				return this.$store.state.games
			},
			before () {
				if (this.after != 0) {
					return this.after - 9
				} else {
					return 0
				}
			}
		},
		methods: {
			async changeGame (game) {
				await this.$store.dispatch('changeGame', game)
			},
			async prev () {
				this.after -= 9
				await this.$store.dispatch('getTopGames', this.before)
			},
			async next () {
				this.after += 9
				await this.$store.dispatch('getTopGames', this.after)
			}
		},
		
		
	}
</script>
sty
