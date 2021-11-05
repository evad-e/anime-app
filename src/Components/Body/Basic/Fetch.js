import { useState, useEffect } from 'react';
import Card from './Card';
const Fetch = () => {
  const [anime, setAnime] = useState([])
  
  useEffect(() => {
    fetch("https://api.jikan.moe/v3/top/anime/1/tv")
      .then((response) => response.json())
      .then((data) => setAnime(data.top.splice(0,20)))
    }, []);
  return (
    <div className="grid grid-cols-5">
        {anime.map((item) =>{
            return <Card title={item.title} img={item.image_url} score={item.score} url={item.url}/>
        } 
        )}
      </div>  
  ) 
}

export default Fetch
