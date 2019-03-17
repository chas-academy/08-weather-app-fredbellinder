const axios = require('axios');

export default async function ClientLocationSearch(location) {
    let coords;
    const url = `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_SEARCH_API_KEY}&q=${location}&pretty=1`;

    coords = await axios.get(url)
        .then(response => {
            return response.data.results.length > 0 ? response.data.results[0].geometry : null
        }).catch(err => console.error(err)
        )
    console.log(coords)
    return coords
}
