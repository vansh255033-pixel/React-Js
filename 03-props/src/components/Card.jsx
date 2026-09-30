import React from 'react'

const Card = (prop) => {
  return (
      <div className='child'>
        <img src = 'https://images.unsplash.com/photo-1790011990347-c59091f9437e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' alt="Profile"></img>
        <h1>{prop.user}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card