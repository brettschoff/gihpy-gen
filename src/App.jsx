import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail/Detail'
import Form from './Form/Form'

function App() {
  const [giphyInfo, setGiphyInfo]=useState({})
  const [gifSearchTitle, setGifSearchTitle]=useState('')

  useEffect(() => {
    const giphyUrl = "https://api.giphy.com/v1/gifs/search?api_key=ZwtyVMPmBqYf9zLKdqgYVjZ9VCf6BKYB&q=" + gifSearchTitle + '&limit=1&offset=0&rating=pg-13&lang=en'

    async function getGif() {
      try {
        const response = await fetch(giphyUrl)
        const data = await response.json()
        console.log(data)
        setGiphyInfo({image_url: data.data[0].images.downsized_medium.url})
      }catch(err) {
        console.log(err)
      }
    }
    getGif()
    }, [gifSearchTitle])

    function searchGif(title) {
      setGifSearchTitle(title)
    }
  return (
    <>
      <Form handleClick={searchGif}/>
      <br></br>
      {giphyInfo ? <Detail giphyInfo={giphyInfo} /> : <p>What would you like to see.</p> }
    </>
  )
}

export default App
