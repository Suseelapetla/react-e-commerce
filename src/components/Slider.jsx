import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {

  const images = [
    {id: 5,
    image : "https://m.media-amazon.com/images/S/aplus-media-library-service-media/274ade44-7d1f-4c9d-9e21-c6454118b772.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    color: "linear-gradient(to bottom right,#BED8CB,#2D3132)"},
    {id: 30,
    image : "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b557a054-4c9f-41c2-b653-3cd3d9c953a9.__CR0,0,1464,600_PT0_SX1464_V1___.png",
    color: "linear-gradient(to bottom right,#DDBCA3,#7CCCD5)"},
    {id: 22,
    image : "https://m.media-amazon.com/images/S/aplus-media-library-service-media/1b147d8d-0a4a-46f5-a3cd-2ec7fcc2e8d0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    color: "linear-gradient(to bottom right,#EBEBEB,#00000080)"}
  ]

  const [index,setIndex] = useState(0)

  const timer = setTimeout(function autoDisplay() {
    setIndex(index+1)
    if(index == 2){
      setIndex(0)
    }
    return clearTimeout()
  },3000)

  const displayImage = (action) => {
    clearTimeout(timer)
    if(action === "prev"){
      setIndex(index-1)
      if(index == 0){
        setIndex(2)
      }
    }else if(action === "next"){
      setIndex(index+1)
      if(index == 2){
        setIndex(0)
      }
    }
  }

  return (
    <div className='slider' style={{background:images[index].color}}>
      <Link to={`/products/${images[index].id}`}>
      <img src={images[index].image} alt="" />
      </Link>
      <button onClick={e => displayImage("prev")}><i class="fa-solid fa-chevron-left"></i></button>
      <button id="next" onClick={e => displayImage("next")}><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

export default Slider