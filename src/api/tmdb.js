import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	params: {
		api_key: '6ed12e064b90ae1290fa326ce9e790ff'
	}
});
