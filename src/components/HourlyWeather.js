import React from "react";
import fahrenheit from "./fahrenheit";
import celsius from "./celsius";

export default function HourlyWeather(props) {
  let renderArray = [];
  if (props.hourly) {
    for (let i = 1; i < 24; i += 3) {
      renderArray.push(props.hourly.data[i]);
    }
    return (
      <div className={"hourly"}>
        <ul className={"list-group hourly"}>
          <li key={1} className={"list-item hourly title"}>
            TriHourly:
          </li>
          {renderArray.map(data => {
            return (
              <li key={data.time} className={"list-item hourly"}>
                {props.unixTimestampToLocaleTimeStringInLocalTimeZone(
                  data.time
                )}
                <p>
                  <img
                    className={"hourlyIcon hourly"}
                    src={require(`../assets/${data.icon}.svg`)}
                    alt={data.icon}
                  />
                  Temp:{" "}
                  {props.celsius
                    ? celsius(data.temperature)
                    : fahrenheit(data.temperature)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
