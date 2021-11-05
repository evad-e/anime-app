import React from 'react'

const Card = ({ title, img, score,url }) => {
  return (
   <a href={url}>
    <div className="h-full m-8 flex items-center justify-center ">
        <figure className="w-3/4 rounded-lg hover:bg-black transform transition duration-500 hover:scale-110 relative max-w-xs cursor-pointer">
        <img className="transform transition duration-500 rounded-lg shadow-xl hover:shadow-2xl hover:opacity-30" src={img}/>
            <figcaption className=" p-2 text-left rounded-lg w-3/4 -mt-16 text-white px-4">
                <div className="">
                <h1 className="font-extrabold truncate">
                    {title}
                </h1>
                </div>
                <div className="flex">
                <h1 className="truncate">
                    Rating: {score}
                </h1>
                </div>
            </figcaption>
        </figure>
    </div>  
   </a>   
  )
}

export default Card
