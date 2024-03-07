import React from 'react'
const getGifs = async (category) => {
  const curl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${'valorant'}&limit=4`
  const resp = await fetch (curl) 
  const {data} = await resp.json()
  console.log(data)

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  return gifs
}
export const GifGrid = ({category}) => {
  const apiKey = import.meta.env.VITE_GIF_API_KEY

  getGifs(category)
  return( 
    <>
        <h3 className=' text-xl font-semibold m-1 p-1' >{category}</h3>
    </>
  )
}
