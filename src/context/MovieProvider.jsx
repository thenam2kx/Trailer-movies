import { createContext } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import YouTube from 'react-youtube'

const MovieContext = createContext()
const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [trailerKey, setTrailerKey] = useState('')

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1
    }
  }

  const handleTrailer = async(id) => {
    setTrailerKey('')
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const moviKey = await fetch(url, options)
      const data = await moviKey.json()
      setTrailerKey(data.results[0].key)
      setModalIsOpen(true)
    } catch (error) {
      setModalIsOpen(false)
    }
  }

  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
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
      </Modal>
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieProvider }