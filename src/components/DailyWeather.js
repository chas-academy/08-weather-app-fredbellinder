import React from 'react'

export default function DailyWeather(props) {


    return (
        <div className={'dailyContainer'} >
            {props.daily.map(data => {
                return (
                    <div key={data.time} className={"card dailyCard"}>
                        <img className={'dailyIcon card-image-top'} src={require(`../assets/${data.icon}.svg`)} alt={data.icon} />
                        <div className={"card-body"}>
                            <h5 className={"card-title"}>{props.unixTimestampWeekDay(data.time)}</h5>
                            <p className={"card-text"}>{data.summary}</p>
                        </div>
                        <ul className={"list-group list-group-flush"}>
                            <li className={"list-group-item"}>Temperature: {
                                props.celsius ? data.temperatureHigh.toFixed(1) + ' ℉' : ((data.temperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'
                            }</li>
                            <li className={"list-group-item"}>Feels like: {props.celsius ? data.apparentTemperatureHigh.toFixed(1) + ' ℉' : ((data.apparentTemperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'}</li>
                            <li className={"list-group-item"}>Wind: {data.windSpeed} m/s</li>
                            <li className={"list-group-item"}>Humidity: {Math.round(data.humidity * 100)}%</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}