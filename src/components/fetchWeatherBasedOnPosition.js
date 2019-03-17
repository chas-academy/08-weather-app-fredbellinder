
export default async function fetchWeatherBasedOnPosition(props) {
    const url = `https://but-of-cors.herokuapp.com/https://api.darksky.net/forecast/HIDDEN_API_KEY/${props.latitude},${props.longitude}`;
    // I setup a CORS-proxy which also handles  https://but-of-cors.herokuapp.com/ cred to https://www.npmjs.com/package/cors-anywhere
    // pretty low-impressive code from my side but let me know if you want to see it. It is only a whitelist and string.replace().
    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            return myJson
        }).catch(err => console.error(err)
        )
}
