const BASE_API  = 'https://yts.am/api/v2/';

class Api {
	async getSuggestion(id) { 
		const query = await fetch(`${BASE_API}movie_details.json?movie_id=${id}`);
		const data = await query.json();
		console.log(data);

		return data;
	}
}

export default new Api();