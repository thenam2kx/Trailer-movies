import { useState } from 'react'

function Header(props) {
  const { onSearch } = props
  const [textSearch, setTextSearch] = useState('')

  return (
    <header className="w-full py-4 px-5 font-roboto bg-[#2c3e50] text-[#ecf0f1]">
      <section className="flex items-center justify-between">
        <section className="flex items-center gap-10">
          <section className="">
            <a href="" className="font-semibold text-2xl text-[#e74c3c]">MOVIES</a>
          </section>
          <nav className="flex items-center gap-5">
            <a href="" className="uppercase">Home</a>
            <a href="" className="uppercase">About</a>
            <a href="" className="uppercase">Contact</a>
          </nav>
        </section>

        {/* search */}
        <section className="">
          <form className="w-full max-w-sm">
            <div className="flex items-center border-b border-[#e74c3c]">
              <input onChange={(event) => setTextSearch(event.target.value)} value={textSearch} className="appearance-none bg-transparent border-none w-full text-[#ecf0f1] mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search movie" aria-label="Full name" />
              <button onClick={() => onSearch(textSearch)} className="flex-shrink-0 bg-[#e74c3c] hover:bg-[#c0392b] border-[#e74c3c] text-sm px-3 my-1 py-2 text-white rounded" type="button">
                Search
              </button>
            </div>
          </form>
        </section>
      </section>
    </header>
  )
}

export default Header