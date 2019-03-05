import React, { Component } from 'react';
import ApiCallComponent from "./ApiCallComponent";


class Position extends Component {
    constructor(props) {
        super(props)

        this.state = {
            longitude: 0,
            latitude: 0
        }
        this.success = this.success.bind(this);
    }

    options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: Infinity
    };

    success(pos) {
        var crd = pos.coords;
        this.setState({
            'longitude': crd.longitude,
            'latitude': crd.latitude
        });
        console.log(this.state);
        return (
            ApiCallComponent(crd.latitude, crd.longitude)
        )
    }

    error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    // navigator.geolocation.getCurrentPosition(success, error, options);
    componentWillMount() {
        navigator.geolocation.getCurrentPosition(this.success, this.error, this.options)
    }

    render() {
        return (
            <div>
                {this.state.longitude}
            </div>
        )
    }
}
export default Position;