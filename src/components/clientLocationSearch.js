const axios = require('axios');

export default async function ClientLocationSearch(location) {
    let coords;
    const url = `https://but-of-cors.herokuapp.com/https://api.opencagedata.com/geocode/v1/json?key=SEARCH_API_KEY&q=${location}&pretty=1`;

    coords = await axios.get(url)
        .then(response => {
            return response.data.results.length > 0 ? response.data.results[0].geometry : ''
        }).catch(err => console.error(err)
        )
    return coords
}
