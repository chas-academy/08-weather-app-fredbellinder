import React from 'react'

async function NavCurrentPositionWeather(props) {
    console.log()
    return (
        <div>
            {/* <img className={'dailyIconNav'} src={require(`../assets/${data.icon}.svg`)} alt={data.icon} />
            <div className={"navWeather"}>
                <h6>Idag: {//unixTimestampWeekDay(data.time, data.timezone)
                    'Lekdag'}</h6>
                <p className={"card-text"}>{data.summary}</p>
            </div>
            <ul className={"list-group list-group-flush"}>
                <li className={"list-group-item"}>Temperature: {
                    props.celsius ? data.temperatureHigh.toFixed(1) + ' ℉' : ((data.temperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'
                }</li>
                <li className={"list-group-item"}>Feels like: {props.celsius ? data.apparentTemperatureHigh.toFixed(1) + ' ℉' : ((data.apparentTemperatureHigh - 32) * 5 / 9).toFixed(1) + ' ℃'}</li>
                <li className={"list-group-item"}>Wind: {data.windSpeed} m/s</li>
                <li className={"list-group-item"}>Humidity: {Math.round(data.humidity * 100)}%</li>
            </ul> */}
        </div>
    )


}


export default NavCurrentPositionWeather;