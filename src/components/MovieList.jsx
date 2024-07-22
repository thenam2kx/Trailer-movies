import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useContext } from 'react'
import { MovieContext } from '~/context/MovieProvider'


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

function MovieList(props) {
  const { title, data } = props

  const { handleTrailer } = useContext(MovieContext)

  return (
    <article className="p-10 pb-10">
      <h2 className="uppercase text-2xl font-semibold">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4 mt-4">
        {
          data && data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="w-[250px] h-[350px]  group relative" onClick={() => handleTrailer(item.id)}>
              <div className="group-hover:scale-105 transition-all w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/40"></div>
                <img className='w-full h-full object-cover rounded-lg' src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
                  <p className='uppercase text-base text-center'>{item.title || item.original_title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
    </article>
  )
}


export default MovieList