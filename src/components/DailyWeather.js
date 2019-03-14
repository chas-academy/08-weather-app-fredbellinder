import React from 'react'
import fahrenheit from './fahrenheit'
import celsius from './celsius'
export default function DailyWeather(props) {


    const { unixTimestampToLocaleTimeStringInLocalTimeZone, unixTimestampWeekDay } = { ...props }
    return (
        <div className={'dailyContainer'} >
            {props.daily.map(data => {
                return (
                    <div key={data.time} className={"card dailyCard"}>
                        <div className="img-wrapper">
                            <img className={'dailyIcon card-image-top'} src={require(`../assets/${data.icon}.svg`)} alt={data.icon} />
                            <div className="info-div">
                                <div className="ul-div">
                                    <ul className="list-group ">
                                        <li className="list-group-info">Temp High: <p>{props.celsius ? fahrenheit(data.temperatureMax) : celsius(data.temperatureMax)}</p></li>
                                        <li className="list-group-info">Temp Low: <p>{props.celsius ? fahrenheit(data.temperatureMin) : celsius(data.temperatureMin)}</p></li>
                                        <li className="list-group-info">Sun goes Up: {unixTimestampToLocaleTimeStringInLocalTimeZone(data.sunriseTime)}</li>
                                        <li className="list-group-info">Sun goes Down: {unixTimestampToLocaleTimeStringInLocalTimeZone(data.sunsetTime)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>{unixTimestampWeekDay(data.time)}</h5>
                            <p className={"card-text"}>{data.summary}</p>
                        </div>
                        <ul className={"list-group list-group-flush"}>
                            <li className={"list-group-item"}>Temperature: {
                                props.celsius ? fahrenheit(data.temperatureHigh) : celsius(data.temperatureHigh)
                            }</li>
                            <li className={"list-group-item"}>Feels like: {props.celsius ? fahrenheit(data.apparentTemperatureHigh) : celsius(data.apparentTemperatureHigh)}</li>
                            <li className={"list-group-item"}>Wind: {data.windSpeed} m/s</li>
                            <li className={"list-group-item"}>Humidity: {Math.round(data.humidity * 100)}%</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}