const axios = require('axios');

export default async function coordsToLocationName(latitude, longitude) {
    let coords;
    const url = `https://but-of-cors.herokuapp.com/https://api.opencagedata.com/geocode/v1/json?key=SEARCH_API_KEY&q=${latitude}%2C${longitude}&pretty=1`;
    coords = await axios.get(url)
        .then(response => {
            return response.data.results[0] ? response.data.results[0].components : ''
        }).catch(err => console.error(err)
        )
    if (coords) {

        let string = `${coords.road ? coords.road + ',' : ''} ${coords.city ? coords.city + ',' : ''} ${coords.country ? coords.country : ''}`
        return string
    } else { return '' }
}