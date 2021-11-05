import React from 'react'

const Input = ({ name, type, placeholder,search,onChange }) => {
  
  return (
    <span className="w-full mx-2 h-10 cursor-pointer text-sm rounded-full flex">
          <input type={ type } name={ name } placeholder={ placeholder } value={search} onChange={onChange} className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
    </span>
  )
}

export default Input
