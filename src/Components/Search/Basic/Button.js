import React from 'react'
import { FaSearch } from 'react-icons/fa'
const Button = ({ onClick }) => {
  return (
    <>
      <button onClick = {onClick} type="button" className="py-2 px-4 bg-white hover:bg-gray-300 transition ease-in duration-200 text-center text-base shadow-md focus:outline-none rounded-full">
        <FaSearch />
      </button>
  
    </>
  )  
}

export default Button
