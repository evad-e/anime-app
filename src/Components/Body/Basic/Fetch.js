import { useState, useEffect } from 'react';

const Fetch = () => {
  const [anime, setAnime] = useState([])
  
  const fetchData = () => {
    return fetch("https://api.jikan.moe/v3/top/anime/1/tv")
    .then((response) => response.json())
    .then((data) => {
     
      setAnime(data);
    })
  }
  useEffect(() => {
    fetchData();
    }, []);
  
  return (
    <div>
      
    </div>
  ) 
}

export default Fetch
