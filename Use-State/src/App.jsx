import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0);

function Increase(){
  setnum(num+1);
}

function Decrease(){
  if(num >= 1)
  setnum(num-1);
else{
  setnum('cannot decrease more');
  setTimeout(()=>{
    setnum(0);
  },1000)
}
}


  return (
    <div className='container'>
    <button  onClick = {()=>{Increase()}}>Increase</button>
     <h1>{num}</h1>
    <button  onClick = {()=>{Decrease()}}>Decrease</button>
   
    </div>
  )
}

export default App