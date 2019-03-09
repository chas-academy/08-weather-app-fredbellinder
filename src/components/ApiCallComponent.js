import React, { Component } from 'react'
import fetchWeatherBasedOnPosition from './fetchWeatherBasedOnPosition';
import DailyWeather from './DailyWeather';


export default class ApiCallComponent extends Component {
    constructor(props) {

        super(props)
        console.log(props);

        this.state = {
            fetchedWeather: false,
            celsius: true
        }
    }
    componentWillMount() {

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: Infinity
        };

        const success = (pos) => {
            let geoCoords = pos.coords;
            this.setState({
                ...this.state,
                geoCoords
            })
            let what = fetchWeatherBasedOnPosition({ latitude: this.state.geoCoords.latitude, longitude: this.state.geoCoords.longitude });
            what.then(data => {
                this.setState({
                    ...this.state,
                    ...data,
                    fetchedWeather: true
                });
            })
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);

    }

    unixTimestampToLocaleTimeStringInLocalTimeZone = (unixTimeStamp, timeZone) => {
        const time = new Date(unixTimeStamp * 1000);
        return time.toLocaleTimeString({ timeZone: timeZone, timeZoneName: 'long' })
    }

    toggleTempScale = () => {
        this.setState({
            ...this.state,
            celsius: !this.state.celsius
        })
    }

    render() {
        if (this.state.fetchedWeather) {
            return (
                <div>
                    <p>Timezone: {this.state.timezone}</p>
                    <p>apparentTemperature: {this.state.celsius ? this.state.currently.apparentTemperature.toFixed(1) + ' ℉' : ((this.state.currently.apparentTemperature - 32) * 5 / 9).toFixed(1) + ' ℃'}</p>
                    <p>cloudCover: {this.state.currently.cloudCover}</p>
                    <p>dewPoint: {this.state.currently.dewPoint}</p>
                    <p>humidity: {Math.round(this.state.currently.humidity)}%</p>
                    <p>icon: {this.state.currently.icon}</p>
                    <p>SunriseTime: {this.unixTimestampToLocaleTimeStringInLocalTimeZone(this.state.daily.data[0].sunriseTime, this.state.timezone)}</p>
                    <p>SunsetTime: {this.unixTimestampToLocaleTimeStringInLocalTimeZone(this.state.daily.data[0].sunsetTime, this.state.timezone)}</p>
                    <p>pressure: {this.state.currently.pressure}</p>
                    <p>summary: {this.state.currently.summary}</p>
                    <p>temperature: {this.state.celsius ? this.state.currently.temperature.toFixed(1) + ' ℉' : ((this.state.currently.temperature - 32) * 5 / 9).toFixed(1) + ' ℃'}</p>
                    <p>visibility: {this.state.currently.visibility}</p>
                    <button onClick={this.toggleTempScale}>℉/℃</button>
                    <DailyWeather daily={this.state.daily.data.slice(0, 5)} celsius={this.state.celsius} />
                </div>
            )
        } else {
            return (
                <div className="loadingCont">
                    <img className={'loadingGif'} src="https://media.giphy.com/media/RB1o2aaBZmkfe/giphy.gif" alt={'Weather is loading!'} />
                </div>
            )
        }
    }
}