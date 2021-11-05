import React from 'react'

const Title = ({ title }) => {
  return (
    <div className="ml-8 text-3xl font-semibold text-white hidden md:flex">
          { title }
    </div>
  )
}

export default Title
