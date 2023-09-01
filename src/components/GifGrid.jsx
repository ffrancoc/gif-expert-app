import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifGridItem } from "./GifGridItem"


export const GifGrid = ({ category }) => {

  const { images, isLoading} = useFetchGifs(category)

  return (    
    <div>
      { isLoading && (<p>Cargango</p>) }
      { images.map((image) => (
        <GifGridItem key={image.id} {...image} />
      ))}
    </div>
  )
}
