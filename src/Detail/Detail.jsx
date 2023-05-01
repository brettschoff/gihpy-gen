import React from "react";
import './Detail.css'

export default function Detail({giphyInfo}) {
    return (
        <div className="detail">
            <div className='description'>Your gif is......</div>
            <img src={giphyInfo.image_url} className="image"/>
        </div>
    )
}