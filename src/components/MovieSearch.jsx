import { useContext } from 'react'
import { MovieContext } from '~/context/MovieProvider'

function MovieSearch(props) {
  const { data, title } = props

  const { handleTrailer } = useContext(MovieContext)

  return (
    <div className="p-10 pb-10">
      <h2 className="uppercase text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-5 gap-4">
        {
          data && data.map((item) => (
            <div
              key={item.id}
              className="w-[250px] h-[350px]  group relative"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-all w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black/40"></div>
                <img className='w-full h-full object-cover rounded-lg' src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`} alt={item.title} />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <p className='uppercase text-base text-nowrap'>{item.title || item.original_title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MovieSearch