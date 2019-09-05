import React from 'react'
import loadingGif from '../images/gif/loading-special.gif'

export default function Loading() {
    return (
        <div className="loading">
            <h4>loading rooms...</h4>
            <img src={loadingGif} alt=""></img>
        </div>
    )
}
