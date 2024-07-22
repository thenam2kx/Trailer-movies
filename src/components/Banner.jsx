import Rating from '../assets/rating.png'
import Ratinghalf from '../assets/rating-half.png'
import imgbanner from '../assets/temp-1.jpeg'
import playIcon from '../assets/play-button.png'

function Banner() {
  return (
    <article className="w-full h-[700px] bg-cover bg-banner relative">
      <section className="absolute top-0 left-0 w-full h-full opacity-30 bg-[#2c3e50]"></section>
      <section className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-[30px] px-4">
        <article className="w-1/2">
          <p className="text-white bg-gradient-to-r text-xl from-red-600 to-red-300 w-fit py-1 px-3 items-baseline">TV Show</p>
          <div className="flex flex-col space-y-4 mt-4">
            <h2 className="text-white font-bold text-4xl">Nghe nói em thích tôi</h2>
            <div className="flex items-center gap-3">
              <img className='h-8 w-8' src={Rating} alt="" />
              <img className='h-8 w-8' src={Rating} alt="" />
              <img className='h-8 w-8' src={Rating} alt="" />
              <img className='h-8 w-8' src={Rating} alt="" />
              <img className='h-8 w-8' src={Ratinghalf} alt="" />
            </div>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veniam reiciendis sunt nisi,
              vitae hic quam ab perspiciatis tempore tenetur voluptates, ducimus minima voluptate nulla dicta similique,
              qui sapiente ipsa!
            </p>
          </div>
          <div className='flex items-center gap-5 space-x-4 mt-6'>
            <button className='px-3 py-2 rounded-md bg-[#2c3e50] text-white font-semibold text-base'>Chi tiết</button>
            <button className='px-3 py-2 rounded-md bg-red-600 text-white font-semibold text-base'>Xem phim</button>
          </div>
        </article>

        <article className='w-1/2 h-full flex items-center justify-center'>
          <div className="w-[300px] group relative">
            <img className='w-full' src={imgbanner} alt="" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all cursor-pointer group-hover:backdrop-blur-sm">
              <img className='h-12 w-12 opacity-0 transition-all group-hover:opacity-100 cursor-pointer' src={playIcon} alt="" />
            </div>
          </div>
        </article>
      </section>
    </article>
  )
}

export default Banner