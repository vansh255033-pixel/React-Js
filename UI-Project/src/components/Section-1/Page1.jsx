import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = (elem) => {
  return (
    <div className='py-3 px-18 h-[90vh] bg-white flex flex-row '>
     <LeftContent />
     <RightContent users = {elem.users}/>
    </div>
  )
}

export default Page1