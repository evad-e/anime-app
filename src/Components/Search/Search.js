import React from 'react'


const Search = () => {
  return (
    <div class="w-full flex flex-row items-center p-2 justify-between shadow-xs bg-blue-900">
      <div class="ml-8 text-3xl font-semibold text-white hidden md:flex">
          Anime Library
      </div>
      <span class="w-1/4 h-10 cursor-pointer text-sm rounded-full flex">
          <input type="search" name="search" placeholder="Search" class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
      </span>
      
    </div>

  )
}

export default Search
