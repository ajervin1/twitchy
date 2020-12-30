import Vue from 'vue'
import Vuex from 'vuex'
import http from './src/api'

Vue.use(Vuex)

const store = new Vuex.Store({
	// Initial State
	state: {
		clips: [],
		game: null,
		period: 'week',
		cursor: null,
		games: [],
	},
	
	actions: {
		async getTopGames (context, offset) {
			const { state } = context
			const { data: { top: games } } = await http.get('/games/top', {
				params: {
					limit: 9,
					offset
				}
			})
			state.games = games.map(game => game.game)
		},
		// Get Clips Main Call
		async getClips (context) {
			const { state } = context
			const { data } = await http.get('/clips/top', {
				params: {
					game: state.game,
					period: state.period,
				}
			})
			const { clips, _cursor } = data
			state.clips = clips
			state.cursor = _cursor
		},
		async nextClips (context) {
			const { state } = context
			const { data } = await http.get('/clips/top', {
				params: {
					game: state.game,
					period: state.period,
					cursor: state.cursor
				}
			})
			const { clips, _cursor } = data
			state.clips = clips
			state.cursor = _cursor
		},
		// When User Changes Games Needs To Make New Api Call
		async changeGame (context, newgame) {
			const { state } = context
			state.game = newgame
			await context.dispatch('getClips')
		},
		// When User Changes Games Needs To Make New Api Call
		async changePeriod (context, newperiod) {
			const { state } = context
			state.period = newperiod
			await context.dispatch('getClips')
		},
		async searchGames (context, query) {
			const { state } = context
			let { data: { games } } = await http.get('/search/games', {
				params: {
					query,
					limit: 3
				}
			})
			games = games.slice(0, 5)
			state.results = games
		}
	}
	
})

// Inital Data
async function init () {
	await store.dispatch('getClips');
	await store.dispatch('getTopGames')
}

init()

export default store
