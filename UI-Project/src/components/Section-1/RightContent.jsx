import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div className='w-2/3 h-full overflow-x-auto  p-4 rounded-xl flex flex-nowrap gap-10'> 
    {props.users.map(function(elem,idx){
      return <RightCard key = {idx} id = {idx} img = {elem.img} tag = {elem.tag}/>
    })}
    </div>
  )
}

export default RightContent