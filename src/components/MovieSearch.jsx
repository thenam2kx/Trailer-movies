import { useState } from 'react'
import Modal from 'react-modal'
import YouTube from 'react-youtube'

import { useContext } from 'react'
import { MovieContext } from '~/context/MovieProvider'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
}

function MovieSearch(props) {
  const { data, title } = props
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
    </div>
  )
}

export default MovieSearch