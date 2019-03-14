import React from 'react'

export default function fahrenheit(degrees) {

    return (
        <span>
            {degrees.toFixed(1)} ℉
        </span>
    )
}
