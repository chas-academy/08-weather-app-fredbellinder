
export default async function fetchWeatherBasedOnPosition(props) {
    const url = `https://but-of-cors.herokuapp.com/https://api.darksky.net/forecast/HIDDEN_API_KEY/${props.latitude},${props.longitude}`;
    return await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            return myJson
        }).catch(err => console.error(err)
        )
}

