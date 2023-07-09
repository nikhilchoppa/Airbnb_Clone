import React from 'react'
import BASE_URL from '../../utills/api-utill'

const Card2 = ({items}) => {
    const {images,eventName}=items

  return (
    <div>
    <div className='card2-text'>My albums</div>
    <div className='card2-albums'>
       {
        images.map((img)=>(
          <>
           <img className='card2-img' src={`${BASE_URL}/proposal/images/${img}`} alt={eventName}/>
          </>
        ))
       }
    </div>
    </div>
  )
}

export default Card2
