import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="ml-8 font-semibold text-white hidden md:flex">
        <h1 className="text-2xl sm:text-xl md:text-2xl xl:text-3xl text-center text-white font-bold leading-tight">{title}</h1>
    </div>
  )
}

export default Title
