const apiKey = import.meta.env.VITE_GIF_API_KEY

const getGifs = async (category) => {
    const curl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch(curl)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs
}

export default getGifs 