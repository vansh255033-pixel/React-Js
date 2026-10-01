/*
import { useState } from 'react'
import axios from 'axios';

const App = () => {

const [data, setData] = useState([]);

 const getData = async ()=>{
  const response = await axios.get('https://picsum.photos/v2/list')
  setData(response.data);
 }

  return (
    <div>
     <button onClick = {getData}>Click Me</button>
     <div>
      {data.map((elem,index)=>{
       return <h3 key = {index}>{elem.author},{index}</h3>
     })}
     </div>
     
    </div>
  )
}

export default App */

import { useState } from "react"
import { useEffect } from "react"



const App = () => {

  const [num, setNum] = useState(0);

  useEffect(function(){
    console.log("useEffect is working")
  })

  return (
    <div>
      <h1>{num}</h1>
      <button onClick= {()=>{
        setNum(10)
      }}>
        Click Me
      </button>
    </div>
  )
}

export default App