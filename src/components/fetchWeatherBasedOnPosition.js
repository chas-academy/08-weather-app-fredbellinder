
export default function fetchWeatherBasedOnPosition(props) {
    console.log(props)
    const url = `https://but-of-cors.herokuapp.com/https://api.darksky.net/forecast/781ed3b5f63fd16ecbf8e4dfeacab416/${props.latitude},${props.longitude}`;
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            return myJson
        }).catch(err => console.error(err)
        )
}

