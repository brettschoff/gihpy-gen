import React, { useState } from "react";
import './Form.css'

export default function Form({handleClick}) {
    const [gifTitle, setGifTitle]=useState('')

    function handleChange(e) {
        setGifTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleClick(gifTitle)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search-bar">Keyword: </label>
            <input type="text" id="search-bar" name="gifTitle" value={gifTitle} onChange={handleChange}/>
            <button type="submit" className='Button'>Search for GIF</button>
        </form>
    )
}