import React from 'react'
import Title from './Basic/Title'
import Input from './Basic/Input'
import Button from './Basic/Button'
import { useState } from 'react'
function Search(){
  const [anime, setAnime] = useState([])
  const [search,setSearch] = useState("")
 
  const searchAnime= ()=>{
    
    const url= "https://api.jikan.moe/v3/search/anime?q="+search
    
    fetch(url)
    .then((response) => response.json())
    .then((data)=>console.log(data.results.splice(0,10)))
    return(
      <div className="grid lg:grid-cols-5 md:grid-cols-3 ">
        {anime.map((item) =>{
            return <Card title={item.title} img={item.image_url} score={item.score} url={item.url}/>
        } 
        )}
      </div>  
    )
  }
  return (
    <div className="shadow-md sticky top-0 z-50 w-full flex flex-row items-center p-2 justify-between shadow-xs bg-blue-900">
      
      <Title title = "Anime Library"/>
      <div className="w-1/4 flex justify-end">

        <Input name = "search" type = "search" placeholder="Search" value={search} onChange = {(e)=>{setSearch(e.target.value)}}/>
        <Button onClick={searchAnime}/>
        
      </div>
    </div>
  )
}

export default Search
