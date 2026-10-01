import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className='h-60 w-85 bg-black mb-4'>
        <img src = {props.elem.download_url} className='h-full object-cover rounded-2xl'></img>
        <h3>{props.elem.author}</h3>
      </div>
    </div>
  )
}

export default Card