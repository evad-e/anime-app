import React from 'react'
import Fetch from './Basic/Fetch';
import Hero from './Basic/Hero';
const Body = () => {
  
  return (
    <>
      <Hero />
      <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <Fetch />
      </div>
    </>
  )
}

export default Body
