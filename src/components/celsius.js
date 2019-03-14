import React from 'react'

export default function celsius(data) {
    return (
        <span>
            {((data - 32) * 5 / 9).toFixed(1) + ' ℃'}
        </span>
    )
}