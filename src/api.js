import axios from 'axios'

const http = axios.create({
	baseURL: 'https://api.twitch.tv/kraken',
	headers: {
		'Accept': 'application/vnd.twitchtv.v5+json',
		'Client-ID': 'mfytj1f03ko0k4uloqw0tgiusjkjqq'
	},
	params: {
		limit: 6
	}
})

export default http
