import React, { Component } from 'react'
import fetchWeatherBasedOnPosition from './fetchWeatherBasedOnPosition';
import DailyWeather from './DailyWeather';
import HourlyWeather from './HourlyWeather'


export default class ApiCallComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fetchedWeather: false,
            celsius: true,
            currently: { "time": 1552340088, "summary": "Clear", "icon": "clear-night", "precipIntensity": 0, "precipProbability": 0, "temperature": 24.69, "apparentTemperature": 15.33, "dewPoint": 11.74, "humidity": 0.57, "pressure": 1006.84, "windSpeed": 8.91, "windGust": 22.14, "windBearing": 279, "cloudCover": 0, "uvIndex": 0, "visibility": 8.33, "ozone": 469.04 },
            daily: { "summary": "Snow (1–3 in.) on Wednesday, with high temperatures rising to 44°F on Sunday.", "icon": "snow", "data": [{ "time": 1552258800, "summary": "Breezy and partly cloudy starting in the afternoon, continuing until evening.", "icon": "wind", "sunriseTime": 1552281482, "sunsetTime": 1552322439, "moonPhase": 0.15, "precipIntensity": 0.0002, "precipIntensityMax": 0.001, "precipIntensityMaxTime": 1552316400, "precipProbability": 0.13, "precipAccumulation": 0.043, "precipType": "snow", "temperatureHigh": 31.64, "temperatureHighTime": 1552320000, "temperatureLow": 17.67, "temperatureLowTime": 1552366800, "apparentTemperatureHigh": 20.78, "apparentTemperatureHighTime": 1552323600, "apparentTemperatureLow": 6.81, "apparentTemperatureLowTime": 1552366800, "dewPoint": 14.67, "humidity": 0.67, "pressure": 1000.47, "windSpeed": 11.87, "windGust": 26.47, "windGustTime": 1552320000, "windBearing": 301, "cloudCover": 0.33, "uvIndex": 1, "uvIndexTime": 1552294800, "visibility": 6.59, "ozone": 471.12, "temperatureMin": 18.27, "temperatureMinTime": 1552284000, "temperatureMax": 31.64, "temperatureMaxTime": 1552320000, "apparentTemperatureMin": 6.92, "apparentTemperatureMinTime": 1552280400, "apparentTemperatureMax": 20.78, "apparentTemperatureMaxTime": 1552323600 }, { "time": 1552345200, "summary": "Mostly cloudy starting in the evening.", "icon": "partly-cloudy-night", "sunriseTime": 1552367706, "sunsetTime": 1552408982, "moonPhase": 0.19, "precipIntensity": 0, "precipIntensityMax": 0.0001, "precipIntensityMaxTime": 1552428000, "precipProbability": 0, "temperatureHigh": 31.22, "temperatureHighTime": 1552402800, "temperatureLow": 25.52, "temperatureLowTime": 1552417200, "apparentTemperatureHigh": 31.22, "apparentTemperatureHighTime": 1552402800, "apparentTemperatureLow": 17.41, "apparentTemperatureLowTime": 1552424400, "dewPoint": 13.44, "humidity": 0.62, "pressure": 1009.24, "windSpeed": 2.94, "windGust": 21.54, "windGustTime": 1552345200, "windBearing": 301, "cloudCover": 0.19, "uvIndex": 1, "uvIndexTime": 1552381200, "visibility": 9.89, "ozone": 429.92, "temperatureMin": 17.67, "temperatureMinTime": 1552366800, "temperatureMax": 31.22, "temperatureMaxTime": 1552402800, "apparentTemperatureMin": 6.81, "apparentTemperatureMinTime": 1552366800, "apparentTemperatureMax": 31.22, "apparentTemperatureMaxTime": 1552402800 }, { "time": 1552431600, "summary": "Snow (1–2 in.) and breezy until afternoon.", "icon": "snow", "sunriseTime": 1552453929, "sunsetTime": 1552495526, "moonPhase": 0.22, "precipIntensity": 0.0116, "precipIntensityMax": 0.0364, "precipIntensityMaxTime": 1552471200, "precipProbability": 0.8, "precipAccumulation": 1.77, "precipType": "snow", "temperatureHigh": 38.37, "temperatureHighTime": 1552489200, "temperatureLow": 35.15, "temperatureLowTime": 1552546800, "apparentTemperatureHigh": 32.45, "apparentTemperatureHighTime": 1552492800, "apparentTemperatureLow": 28.77, "apparentTemperatureLowTime": 1552546800, "dewPoint": 29.99, "humidity": 0.85, "pressure": 995.48, "windSpeed": 11.39, "windGust": 34.87, "windGustTime": 1552467600, "windBearing": 153, "cloudCover": 0.82, "uvIndex": 1, "uvIndexTime": 1552467600, "visibility": 5.93, "ozone": 419.94, "temperatureMin": 27.53, "temperatureMinTime": 1552431600, "temperatureMax": 38.37, "temperatureMaxTime": 1552489200, "apparentTemperatureMin": 18.33, "apparentTemperatureMinTime": 1552431600, "apparentTemperatureMax": 32.45, "apparentTemperatureMaxTime": 1552492800 }, { "time": 1552518000, "summary": "Foggy in the morning.", "icon": "fog", "sunriseTime": 1552540151, "sunsetTime": 1552582068, "moonPhase": 0.26, "precipIntensity": 0.004, "precipIntensityMax": 0.0113, "precipIntensityMaxTime": 1552554000, "precipProbability": 0.72, "precipType": "rain", "temperatureHigh": 37.26, "temperatureHighTime": 1552579200, "temperatureLow": 31.27, "temperatureLowTime": 1552626000, "apparentTemperatureHigh": 32.7, "apparentTemperatureHighTime": 1552586400, "apparentTemperatureLow": 27.78, "apparentTemperatureLowTime": 1552633200, "dewPoint": 34.56, "humidity": 0.93, "pressure": 989.53, "windSpeed": 7.19, "windGust": 25.18, "windGustTime": 1552528800, "windBearing": 152, "cloudCover": 0.91, "uvIndex": 1, "uvIndexTime": 1552554000, "visibility": 7.34, "ozone": 451.12, "temperatureMin": 34.41, "temperatureMinTime": 1552600800, "temperatureMax": 37.26, "temperatureMaxTime": 1552579200, "apparentTemperatureMin": 28.77, "apparentTemperatureMinTime": 1552546800, "apparentTemperatureMax": 35.78, "apparentTemperatureMaxTime": 1552597200 }, { "time": 1552604400, "summary": "Mostly cloudy throughout the day.", "icon": "partly-cloudy-day", "sunriseTime": 1552626374, "sunsetTime": 1552668611, "moonPhase": 0.29, "precipIntensity": 0.0004, "precipIntensityMax": 0.0021, "precipIntensityMaxTime": 1552662000, "precipProbability": 0.32, "precipType": "rain", "temperatureHigh": 40.21, "temperatureHighTime": 1552662000, "temperatureLow": 35.66, "temperatureLowTime": 1552676400, "apparentTemperatureHigh": 37.05, "apparentTemperatureHighTime": 1552658400, "apparentTemperatureLow": 27.3, "apparentTemperatureLowTime": 1552716000, "dewPoint": 32.08, "humidity": 0.9, "pressure": 992.5, "windSpeed": 3.14, "windGust": 22.94, "windGustTime": 1552687200, "windBearing": 227, "cloudCover": 0.57, "uvIndex": 1, "uvIndexTime": 1552636800, "visibility": 10, "ozone": 407.29, "temperatureMin": 31.27, "temperatureMinTime": 1552626000, "temperatureMax": 40.21, "temperatureMaxTime": 1552662000, "apparentTemperatureMin": 27.78, "apparentTemperatureMinTime": 1552633200, "apparentTemperatureMax": 37.05, "apparentTemperatureMaxTime": 1552658400 }, { "time": 1552690800, "summary": "Mostly cloudy throughout the day and windy in the evening.", "icon": "wind", "sunriseTime": 1552712596, "sunsetTime": 1552755153, "moonPhase": 0.33, "precipIntensity": 0.0065, "precipIntensityMax": 0.0199, "precipIntensityMaxTime": 1552716000, "precipProbability": 0.8, "precipType": "rain", "temperatureHigh": 43.27, "temperatureHighTime": 1552752000, "temperatureLow": 35.55, "temperatureLowTime": 1552802400, "apparentTemperatureHigh": 36.95, "apparentTemperatureHighTime": 1552748400, "apparentTemperatureLow": 29.49, "apparentTemperatureLowTime": 1552802400, "dewPoint": 33.88, "humidity": 0.81, "pressure": 988.13, "windSpeed": 10.81, "windGust": 40.35, "windGustTime": 1552759200, "windBearing": 229, "cloudCover": 0.77, "uvIndex": 1, "uvIndexTime": 1552723200, "visibility": 8.31, "ozone": 369.53, "temperatureMin": 35.75, "temperatureMinTime": 1552716000, "temperatureMax": 43.27, "temperatureMaxTime": 1552752000, "apparentTemperatureMin": 27.3, "apparentTemperatureMinTime": 1552716000, "apparentTemperatureMax": 36.95, "apparentTemperatureMaxTime": 1552748400 }, { "time": 1552777200, "summary": "Foggy until afternoon.", "icon": "fog", "sunriseTime": 1552798818, "sunsetTime": 1552841696, "moonPhase": 0.37, "precipIntensity": 0.0039, "precipIntensityMax": 0.0109, "precipIntensityMaxTime": 1552834800, "precipProbability": 0.69, "precipType": "rain", "temperatureHigh": 44.26, "temperatureHighTime": 1552838400, "temperatureLow": 37.99, "temperatureLowTime": 1552885200, "apparentTemperatureHigh": 37.9, "apparentTemperatureHighTime": 1552838400, "apparentTemperatureLow": 29.71, "apparentTemperatureLowTime": 1552885200, "dewPoint": 35.09, "humidity": 0.84, "pressure": 993.55, "windSpeed": 10.29, "windGust": 35.74, "windGustTime": 1552860000, "windBearing": 219, "cloudCover": 0.91, "uvIndex": 1, "uvIndexTime": 1552809600, "visibility": 7.12, "ozone": 359.38, "temperatureMin": 35.55, "temperatureMinTime": 1552802400, "temperatureMax": 44.26, "temperatureMaxTime": 1552838400, "apparentTemperatureMin": 29.49, "apparentTemperatureMinTime": 1552802400, "apparentTemperatureMax": 37.9, "apparentTemperatureMaxTime": 1552838400 }, { "time": 1552863600, "summary": "Mostly cloudy throughout the day.", "icon": "partly-cloudy-day", "sunriseTime": 1552885040, "sunsetTime": 1552928237, "moonPhase": 0.41, "precipIntensity": 0.0011, "precipIntensityMax": 0.0048, "precipIntensityMaxTime": 1552914000, "precipProbability": 0.3, "precipType": "rain", "temperatureHigh": 42.2, "temperatureHighTime": 1552906800, "temperatureLow": 27.23, "temperatureLowTime": 1552971600, "apparentTemperatureHigh": 36.3, "apparentTemperatureHighTime": 1552928400, "apparentTemperatureLow": 19.87, "apparentTemperatureLowTime": 1552975200, "dewPoint": 30.92, "humidity": 0.73, "pressure": 1002.2, "windSpeed": 8.21, "windGust": 36.72, "windGustTime": 1552888800, "windBearing": 256, "cloudCover": 0.58, "uvIndex": 1, "uvIndexTime": 1552896000, "visibility": 8.98, "ozone": 397, "temperatureMin": 34.05, "temperatureMinTime": 1552946400, "temperatureMax": 42.2, "temperatureMaxTime": 1552906800, "apparentTemperatureMin": 28.26, "apparentTemperatureMinTime": 1552946400, "apparentTemperatureMax": 36.3, "apparentTemperatureMaxTime": 1552928400 }] },
            timezone: 'Africa/Tripoli',
            onRandom: true,


        }
    }
    componentDidMount() {
        const options = {
            enableHighAccuracy: false,
            timeout: 8000,
            maximumAge: Infinity
        };

        const success = (pos) => {
            let geoCoords = pos.coords;
            this.setState({
                ...this.state,
                geoCoords
            })
            let what = fetchWeatherBasedOnPosition({
                latitude: this.state.geoCoords.latitude,
                longitude: this.state.geoCoords.longitude
            });
            what.then(data => {
                console.log(data);



                this.setState({
                    ...this.state,
                    ...data,
                    fetchedWeather: true
                });
            })
        }
        const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            let what = fetchWeatherBasedOnPosition({
                latitude: 30,
                longitude: 20
            });

            what.then(data => {


                this.setState({
                    ...this.state,
                    ...data,
                    fetchedWeather: true
                });
            })

        }
        navigator.geolocation.getCurrentPosition(success, error, options);

    }

    unixTimestampToLocaleTimeStringInLocalTimeZone = (unixTimeStamp, timeZone) => {
        const time = new Date(unixTimeStamp * 1000);
        return time.toLocaleTimeString({ timeZone: timeZone, timeZoneName: 'long' })
    }

    unixTimestampWeekDay = (unixTimeStamp) => {
        let time = new Date(unixTimeStamp * 1000);
        return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(time);
    }

    toggleTempScale = () => {
        this.setState({
            ...this.state,
            celsius: !this.state.celsius
        })
    }

    getCity = () => {
        const slashIndex = this.state.timezone.indexOf('/');
        const city = this.state.timezone.slice(slashIndex + 1, this.state.timezone.length + 1)
        return city
    }

    render() {

        return (
            <div style={{ filter: this.state.fetchedWeather ? 'none' : 'blur(1.5rem)' }}>
                <div className="jumbotron jumbotron-fluid bg-transparent">
                    <div className="container">
                        <h1 className="display-4">Riding weather in {this.getCity() || 'default city'}: </h1>
                        <p className={'lead'}>{this.state.currently.summary}</p>
                        <img
                            className={'todayIcon'}
                            src={require(`../assets/${this.state.currently.icon}.svg`)}
                            alt={this.state.currently.icon} />
                        <p>humidity: {Math.round(this.state.currently.humidity)}%</p>
                        <p>Sun up / down:
                                    {
                                " " + this.unixTimestampToLocaleTimeStringInLocalTimeZone(
                                    this.state.daily.data[0].sunriseTime,
                                    this.state.timezone
                                ) + " "
                            }
                            /
                                    {
                                " " + this.unixTimestampToLocaleTimeStringInLocalTimeZone(
                                    this.state.daily.data[0].sunsetTime,
                                    this.state.timezone
                                )
                            }
                        </p>

                        <p>temperature:
                                {
                                this.state.celsius
                                    ? this.state.currently.temperature.toFixed(1) + ' ℉ '
                                    : ((this.state.currently.temperature - 32) * 5 / 9).toFixed(1) + ' ℃ '
                            }
                            / Feels Like:
                                 {
                                this.state.celsius
                                    ? this.state.currently.apparentTemperature.toFixed(1) + ' ℉ '
                                    : ((this.state.currently.apparentTemperature - 32) * 5 / 9).toFixed(1) + ' ℃ '
                            }
                        </p>
                        <p>visibility: {this.state.currently.visibility}</p>
                        <button
                            onClick={this.toggleTempScale}
                            className={'btn btn-primary'}
                        >℉ / ℃</button>
                    </div>
                    <HourlyWeather hourly={this.state.hourly || null} unixTimestampToLocaleTimeStringInLocalTimeZone={this.unixTimestampToLocaleTimeStringInLocalTimeZone} celsius={this.state.celsius} />
                </div>
                <DailyWeather daily={this.state.daily.data.slice(1, 6)} celsius={this.state.celsius} timeZone={this.state.timezone} unixTimestampWeekDay={this.unixTimestampWeekDay} />
            </div>
        )

    }
}