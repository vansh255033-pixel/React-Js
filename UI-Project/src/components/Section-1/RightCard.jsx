import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 bg-blue-300 relative overflow-hidden rounded-4xl'>
      <img  className = ' h-full w-80 rounded-4xl  object-cover'src = {props.img}></img>
      <div className='h-full w-full top-0 left-0 absolute p-6 flex flex-col justify-between'>
        <h1 className='bg-white text-2xl rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h1>
        <div>
           <p className='text-white flex justify-center items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, laborum!</p>
           <button className='px-4 py-2 text-white bg-gray-800 border-black rounded-4xl mt-5'>{props.tag}</button>
        </div>
      </div>
   
    </div>
    
  )
}

export default RightCard