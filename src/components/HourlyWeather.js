import React from 'react'

export default function HourlyWeather(props) {
    let renderArray = [];
    if (props.hourly) {
        for (let i = 1; i < 24; i += 3) {
            renderArray.push(props.hourly.data[i]);
        }
        return (
            <div className={"hourly"}>
                <ul className={"list-group hourly"}>
                    <li key={1} className={"list-item hourly"}>TriHourly:</li>
                    {renderArray.map(data => {
                        return (
                            <li key={data.time} className={"list-item hourly"}>

                                {props.unixTimestampToLocaleTimeStringInLocalTimeZone(data.time).slice(0, 5)}
                                <p>
                                    <img
                                        className={'hourlyIcon hourly'}
                                        src={require(`../assets/${data.icon}.svg`)}
                                        alt={data.icon}
                                    />
                                    {props.celsius ? 'Temp: ' + data.temperature.toFixed(1) + ' ℉' : 'Temp: ' + ((data.temperature - 32) * 5 / 9).toFixed(1) + ' ℃'}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>)
    } else { return null }

}


