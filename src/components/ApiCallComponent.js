import React, { Component } from "react";

import fetchWeatherBasedOnPosition from "./fetchWeatherBasedOnPosition";
import clientLocationSearch from "./clientLocationSearch";
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import fahrenheit from "./fahrenheit";
import celsius from "./celsius";
import issSearch from "./issSearch";
import coordsToLocationName from "./coordsToLocationName";
import { decoy } from "../decoy";

export default class ApiCallComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedWeather: false,
      celsius: true,
      ...decoy,
      timezone: "Africa/Tripoli",
      onRandom: true,
      blur: 1.5,
      city: "",
      searched: false,
      searchError: false
    };
  }
  componentDidMount() {
    !this.state.searched ? this.weatherBasedOnLocation() : void 0;
    const form = document.querySelector("form")
      ? document.querySelector("form")
      : "";
    form.addEventListener("submit", this.setManualSearchQuery);
  }

  weatherFetch = (
    latitude = this.state.geoCoords.latitude,
    longitude = this.state.geoCoords.longitude,
    celsius = this.state.celsius
  ) => {
    let darkSkyCall = fetchWeatherBasedOnPosition({
      latitude: latitude,
      longitude: longitude,
      celsius: celsius
    });
    darkSkyCall.then(data => {
      this.setState(
        {
          ...this.state,
          ...data,
          fetchedWeather: true,
          searched: false
        },
        () => {
          this.props.setSummary(this.state.daily.summary);
          this.smoothRender();
        }
      );
    });
  };

  weatherBasedOnLocation = () => {
    const options = {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: Infinity
    };

    const success = pos => {
      let geoCoords = pos.coords;
      this.setState({
        ...this.state,
        geoCoords
      });
      this.weatherFetch();
      this.getCity();
    };
    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      this.setState({
        geoCoords: {
          latitude: 49,
          longitude: 2.4
        }
      });
      this.weatherFetch();
      this.getCity();
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  unixTimestampToLocaleTimeStringInLocalTimeZone = (
    unixTimeStamp,
    timeZone = this.state.timezone
  ) => {
    const time = new Date(unixTimeStamp * 1000);
    return time
      .toLocaleTimeString({ timeZone: timeZone, timeZoneName: "long" })
      .slice(0, 5);
  };

  unixTimestampWeekDay = unixTimeStamp => {
    let time = new Date(unixTimeStamp * 1000);
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(time);
  };

  toggleTempScale = () => {
    console.log(this.state.celsius);
    this.setState(
      {
        celsius: !this.state.celsius
      },
      () => {
        console.log(this.state.celsius);
        this.weatherFetch();
        this.getCity();
      }
    );
  };

  getCity = async () => {
    let response = await coordsToLocationName(
      this.state.geoCoords.latitude,
      this.state.geoCoords.longitude
    );
    this.setState({
      city: response ? response : "Unknown Location"
    });
  };

  smoothRender = () => {
    var pos = 15;
    const filter = () => {
      if (pos > 0) {
        pos = pos - 1;
        this.setState({
          blur: pos / 30
        });
      } else {
        clearInterval(fade);
      }
    };
    var fade = setInterval(filter, 1);
  };

  setManualSearchQuery = async event => {
    event.preventDefault();
    let searchTerm = document.querySelector(".searchQuery").value;
    searchTerm = searchTerm.replace(" ", "+");
    let searchTermToCoords = await clientLocationSearch(searchTerm);

    searchTermToCoords
      ? this.setState({
          geoCoords: {
            latitude: searchTermToCoords.lat,
            longitude: searchTermToCoords.lng
          }
        })
      : this.issForTheWin();

    this.weatherFetch();
    this.getCity();
  };

  issForTheWin = async () => {
    let issSearchWhereAbouts = await issSearch();

    this.setState({
      geoCoords: {
        latitude: issSearchWhereAbouts.latitude,
        longitude: issSearchWhereAbouts.longitude
      }
    });

    if (issSearchWhereAbouts) {
      document.querySelector(".iss-banner").style.visibility = "visible";
      setTimeout(function() {
        document.querySelector(".iss-banner").style.visibility = "hidden";
      }, 10000);
    }

    this.weatherFetch();
    this.getCity();
  };

  resetSearchTerms = () => {
    this.setState({
      city: "",
      searched: false
    });
  };

  render() {
    return (
      <div style={{ filter: `blur(${this.state.blur}rem)` }}>
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container today-container">
            <h1 className="display-4">
              Riding weather in {this.state.city || "Loading"}{" "}
            </h1>
            <p className={"iss-banner"}>
              <small>
                Couldn't find what you searched for, heres the weather below the
                ISS
              </small>
            </p>
            <p className={"lead"}>{this.state.currently.summary}</p>
            <img
              className={"todayIcon"}
              src={require(`../assets/${this.state.currently.icon}.svg`)}
              alt={this.state.currently.icon}
            />
            <p>
              Sun up / down:{" "}
              {this.unixTimestampToLocaleTimeStringInLocalTimeZone(
                this.state.daily.data[0].sunriseTime,
                this.state.timezone
              )}{" "}
              /{" "}
              {this.unixTimestampToLocaleTimeStringInLocalTimeZone(
                this.state.daily.data[0].sunsetTime,
                this.state.timezone
              )}
            </p>

            <p>
              Temp:{" "}
              {this.state.celsius
                ? celsius(this.state.currently.temperature)
                : fahrenheit(this.state.currently.temperature)}{" "}
              / Feels Like:{" "}
              {this.state.celsius
                ? celsius(this.state.currently.apparentTemperature)
                : fahrenheit(this.state.currently.apparentTemperature)}
            </p>
            <p>Humidity: {Math.round(this.state.currently.humidity)}%</p>
            <p>
              Visibility: {this.state.currently.visibility}{" "}
              {this.state.celsius ? "km" : "mi"}
            </p>
            <button
              onClick={this.toggleTempScale}
              className={"btn btn-primary"}
              title="Celsius/Fahrenheit"
            >
              {" "}
              ℃ / ℉
            </button>
            <img
              src={require("../assets/compass-icon.png")}
              alt="GPS"
              onMouseUp={this.weatherBasedOnLocation}
              className={"btn btn-primary img-geoposition"}
              title="Get weather from position"
            />
            <img
              src={require("../assets/international-space-station-icon.png")}
              alt="ISS"
              onMouseUp={this.issForTheWin}
              className={"btn btn-primary img-iss"}
              title="See whereabouts of ISS in relation to Earth"
            />
          </div>
          <HourlyWeather
            hourly={this.state.hourly || null}
            unixTimestampToLocaleTimeStringInLocalTimeZone={
              this.unixTimestampToLocaleTimeStringInLocalTimeZone
            }
            celsius={this.state.celsius}
          />
        </div>
        <DailyWeather
          daily={this.state.daily.data.slice(1, 8)}
          celsius={this.state.celsius}
          timeZone={this.state.timezone}
          unixTimestampWeekDay={this.unixTimestampWeekDay}
          unixTimestampToLocaleTimeStringInLocalTimeZone={
            this.unixTimestampToLocaleTimeStringInLocalTimeZone
          }
        />
      </div>
    );
  }
}
