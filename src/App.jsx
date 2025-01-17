import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch'
import img1 from '~/assets/jose-figueroa-_26mWFEuX9w-unsplash.jpg'
import img2 from '~/assets/jose-figueroa-EX6LZpZyiss-unsplash.jpg'
import img3 from '~/assets/jose-figueroa-HbrMwmxExTQ-unsplash.jpg'
import img4 from '~/assets/jose-figueroa-pNTfUOsWeHc-unsplash.jpg'

import { MovieProvider } from './context/MovieProvider'

function App() {

  const [movie, setMovie] = useState([])
  const [movieSearch, setMovieSearch] = useState([])

  const handleSearch = async(searchValue) => {
    setMovieSearch([])
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const searchMovie = await fetch(url, options)
      const data = await searchMovie.json()
      setMovieSearch(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchMovie = async() => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const url = 'https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1'
      const response = await fetch(url, options)
      const data = await response.json()
      setMovie(data.results)
    }
    fetchMovie()
  }, [])

  return (
    <>
      <MovieProvider>
        <div className="min-h-screen bg-[#2c3e50] text-[#ecf0f1]">
          <Header onSearch={handleSearch} />
          <Banner/>
          {
            movieSearch.length > 0 ?
              <MovieSearch title='Ket qua tim kiem' data={movieSearch} /> :
              (
                <>
                  <MovieList title='Phim Hot' data={movie} />
                  <MovieList title='Phim Đề Cử' data={movie} />
                </>
              )
          }
        </div>

        <img src={img1} alt="" className='w-full h-[700px] object-cover mb-2' />
        <img src={img2} alt="" className='w-full h-[700px] object-cover mb-2' />
        <img src={img3} alt="" className='w-full h-[700px] object-cover mb-2' />
        <img src={img4} alt="" className='w-full h-[700px] object-cover mb-2' />
      </MovieProvider>
    </>
  )
}

export default App
