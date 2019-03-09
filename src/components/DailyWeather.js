import React from 'react'

export default function DailyWeather(props) {

    const unixTimestampWeekDay = (unixTimeStamp, timeZone) => {
        const time = new Date(unixTimeStamp * 1000);
        const day = time.getDay();
        const weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(day)
        console.log(weekDay);

        return weekDay
    }
    return (
        props.daily.map(data => {
            return (<div key={data.time}>


                <div className={"card dailyCard"}>
                    <img className={'dailyIcon card-image-top'} src={require(`../assets/${data.icon}.svg`)} alt={data.icon} />
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{unixTimestampWeekDay(data.time, data.timezone)}</h5>
                        <h5 className={"card-text"}>{data.summary}</h5>
                    </div>
                    <ul className={"list-group list-group-flush"}>
                        <li className={"list-group-item"}>Temperature: {
                            props.celsius ? data.temperatureHigh.toFixed(1) + ' ℉' : ((data.temperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'
                        }</li>
                        <li className={"list-group-item"}>Feels like: {props.celsius ? data.apparentTemperatureHigh.toFixed(1) + ' ℉' : ((data.apparentTemperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'}</li>
                        <li className={"list-group-item"}>Wind: {data.windSpeed} m/s</li>
                        <li className={"list-group-item"}>Humidity: {Math.round(data.humidity * 100)}%</li>
                    </ul>
                    <div className={"card-body"}>
                        <a href="#app" className={"card-link"}>Card link</a>
                        <a href="#app" className={"card-link"}>Another link</a>
                    </div>
                </div>
            </div>)
        })
    )
}