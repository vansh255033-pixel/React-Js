import React from 'react'

const Card = (props) => {
  return (
      <div className = 'card'>
         <div className = 'top'>
          <img src = {props.img}></img>
          <button>Save</button>
         </div>
         <div className = 'middle'>
          <div className = 'middle-top'>
            <div className = 'middle-top-left'>
             <h1>{props.company}</h1>
             <p>{props.date}</p>
           </div>
          <h2>{props.post}</h2>
          </div>
          <div className = 'middle-bottom'>
            <h8>{props.tag1}</h8>
            <h8>{props.tag2}</h8>
          </div>
         </div>

         <div className = 'bottom'>
          <div className = 'bottom-left'>
            <h5>{props.pay}</h5>
            <p>{props.location}</p>
          </div>
          <div className = 'bottom-right'>
            <button>Apply Now</button>
          </div>
         </div>
      </div>
  )
}

export default Card