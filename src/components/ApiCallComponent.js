import React, { Component } from 'react'
import fetchWeatherBasedOnPosition from './fetchWeatherBasedOnPosition';

export default class ApiCallComponent extends Component {
    constructor(props) {

        super(props)
        console.log(props);

        this.state = {
            currently: {
                apparentTemperature: 'Loading',
                cloudCover: 'Loading',
                dewPoint: 'Loading',
                humidity: 'Loading',
                icon: 'Loading',
                ozone: 'Loading',
                precipIntensity: 'Loading',
                precipProbability: 'Loading',
                pressure: 'Loading',
                summary: 'Loading',
                temperature: 'Loading',
                time: 'Loading',
                uvIndex: 'Loading',
                visibility: 'Loading',
                windBearing: 'Loading',
                windGust: 'Loading',
                windSpeed: 'Loading',
            },
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
                console.log(this.state);
            })
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(success, error, options);

    }

    componentDidMount() {

    }

    toggleTempScale = () => {
        this.setState({
            ...this.state,
            celsius: !this.state.celsius
        })
        console.log('yolo');

    }


    render() {
        if (this.state.fetchedWeather) {
            return (
                <div>
                    <p>Timezone: {this.state.timezone}</p>
                    <p>apparentTemperature: {this.state.celsius ? this.state.currently.apparentTemperature : Math.round((this.state.currently.apparentTemperature - 32) * 5 / 9)}</p>
                    <p>cloudCover: {this.state.currently.cloudCover}</p>
                    <p>dewPoint: {this.state.currently.dewPoint}</p>
                    <p>humidity: {this.state.currently.humidity}</p>
                    <p>icon: {this.state.currently.icon}</p>
                    <p>ozone: {this.state.currently.ozone}</p>
                    <p>precipIntensity: {this.state.currently.precipIntensity}</p>
                    <p>precipProbability: {this.state.currently.precipProbability}</p>
                    <p>pressure: {this.state.currently.pressure}</p>
                    <p>summary: {this.state.currently.summary}</p>
                    <p>temperature: {
                        this.state.celsius ? this.state.currently.temperature : Math.round((this.state.currently.temperature - 32) * 5 / 9)
                    }</p>
                    <p>uvIndex: {this.state.currently.uvIndex}</p>
                    <p>visibility: {this.state.currently.visibility}</p>
                    <button onClick={this.toggleTempScale}>℉/℃</button>
                </div>
            )
        } else { return null }
    }
}