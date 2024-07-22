import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Modal from 'react-modal'
import YouTube from 'react-youtube'
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

// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: {
//     autoplay: 1
//   }
// }

function MovieList(props) {
  const { title, data } = props
  // const [modalIsOpen, setModalIsOpen] = useState(false)
  // const [trailerKey, setTrailerKey] = useState('')

  // const handleTrailer = async(id) => {
  //   setTrailerKey('')
  //   try {
  //     const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  //       }
  //     }
  //     const moviKey = await fetch(url, options)
  //     const data = await moviKey.json()
  //     setTrailerKey(data.results[0].key)
  //     setModalIsOpen(true)
  //   } catch (error) {
  //     setModalIsOpen(false)
  //   }
  // }

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
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <p className='uppercase text-base text-nowrap'>{item.title || item.original_title}</p>
                </div>
              </div>
            </div>
          ))
        }
      </Carousel>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            zIndex: 999
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
        contentLabel="Example Modal"
      >
        <YouTube videoId={trailerKey} opts={opts} />
      </Modal> */}
    </article>
  )
}


export default MovieList