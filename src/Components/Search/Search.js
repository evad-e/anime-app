import React from 'react'
import Title from './Basic/Title'
import Input from './Basic/Input'
import Button from './Basic/Button'

const Search = () => {
  return (
    <div className="w-full flex flex-row items-center p-2 justify-between shadow-xs bg-blue-900">
      
      <Title title = "Anime Library"/>
      <div className="w-1/4 flex justify-end">
        <Input name = "search" type = "search" placeholder="Search"/>
        <Button/>
      </div>
      
      
      
      
    </div>

  )
}

export default Search
