import React from 'react'

function ApiCallComponent(latitude, longitude) {
    let result;
    const url = `https://crossorigin.me/https://api.darksky.net/forecast/781ed3b5f63fd16ecbf8e4dfeacab416/${latitude},${longitude}`;
    // https://cors-anywhere.herokuapp.com/
    fetch(url).then(function (response) {
        console.table(response);
        return response.json();
    }).then(function (myJson) {
        result = myJson;
    });

    // return (
    //     <div>
    //         <p>{result}</p>
    //     </div>
    // )
}

export default ApiCallComponent;

