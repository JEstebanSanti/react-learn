import { GifItem } from './GifItem'
import { useFetchGifs } from './hooks/useFetchGifs'


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)

 
  return( 
    <>
        <h2 className=' text-2xl sm:text-5xl font-bold mb-5 p-2' >{category}</h2>
        {
          isLoading && <h2 className=' text-2xl sm:text-5xl font-bold mb-5 p-2' >cargando ...</h2>
        }
        <div className="grid auto-rows grid-cols-3 gap-4 mb-5">
        {
          images.map((image, i) => (
            <GifItem
              key={image.id}
              i = {i}
              //mejoor manera 
              {...image}
              /*
              una manera de hacerlo 
              image={image.url}
              title={image.title} */
            />
          ))
        }
        </div>
        
    </>
  )
}
