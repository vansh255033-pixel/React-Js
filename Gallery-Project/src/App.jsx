import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './components/Card';

const App = () => {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=28`);
    console.log(response.data);
  setData(response.data);
  }
 useEffect(function(){
  getData()
 },[index])

  let printData = 'No data available';
  if (data.length > 0){
    printData = data.map(function(elem,idx){
      return <Card elem= {elem}/>
    })
  }

  
  return (
    <div className='h-screen overflow-auto bg-black p-4 text-white gap-5'>
      <div className='flex flex-wrap gap-4'>
        {printData}
      </div>
      <div className='flex justify-center items-center gap-6 p-5'>
        <button className='text-black rounded px-5 py-2 cursor-pointer active:scale-95 bg-fuchsia-300'
        onClick = {()=>{
          if(index > 1){
             setIndex(index-1);
          }
         
        }}>
          Prev
        </button>
         <h1 className='text-2xl  rounded-4xl m-5 align-middle'>Page {index}</h1>
        <button className='text-black rounded px-5 py-2 cursor-pointer active:scale-95 bg-fuchsia-300'
        onClick = {()=>{
    
          setIndex(index+1);
        }}>
         Next
        </button>
      </div>
    </div>
  )
}

export default App