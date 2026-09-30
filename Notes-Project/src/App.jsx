import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('');
  const [detail, setdetail] = useState('');
  const [task, settask] = useState([]);
 
 function DeleteBtn(idx){
 const newTask = [...task];
 newTask.splice(idx,1);
 settask(newTask);

  
 }

  function SubmitHandler(e){

  const newTask = [...task];
  newTask.push({title,detail});
  settask(newTask);
  console.log(newTask);
   e.preventDefault();
   console.log(title);
   console.log(detail);
   settitle('');
   setdetail('');
    }
  return (
    <div className='min-h-screen bg-black text-fuchsia-50 lg:flex '>
      <form className='flex flex-col w-1/2 gap-3 p-10 ' onSubmit={(e)=>{
       SubmitHandler(e);
      }}>
         <input type = 'text' placeholder = 'Enter Heading' className = 'p-6 border-2 rounded-xl outline-none'
         value = {title}
         onChange={(e)=>{
          settitle(e.target.value);
         }}
         ></input>
         <textarea type = 'text' placeholder = 'Details' className = 'h-40 p-6 border-2 flex items-start flex-row rounded-xl outline-none'
         value = {detail}
         onChange = {(e)=>{
          setdetail(e.target.value);
         }}
         ></textarea>
         <button className='p-6 border-2 rounded-xl bg-gray-600 text-white hover:bg-gray-800'>Add Notes</button>
      </form>
      <div className='lg:w-1/2   p-10 '>
        <h1 className='text-xl flex items-center'>Recent Notes</h1>
       <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto w-full bg-black'>
          {task.map(function(elem,idx){
            return <div key = {idx} className=' relative h-50 w-50 bg-cover flex flex-col items-center gap-2 rounded-xl bg-[url(https://imgs.search.brave.com/VbB3Bk4WT7iXJLaouEfFO8KJvpuiF9LxjIeXfFIpPEg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcHNk/L2lzb2xhdGVkLW5v/dGVwYWQtM2QtcmVu/ZGVyXzMxNDk5OS0x/NTc0LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA)] p-5 '>
                <div>
                <h2 className='text-black text-4xl font-bold mt-4'> {elem.title}</h2>
                <p className='text-gray-600 text-2xl font-semibold mt-2 leading-tight '>{elem.detail}</p>
                </div>
              <button onClick = {()=>{
                DeleteBtn(idx);
              }}className='bg-gray-600 text-white p-2 absolute bottom-2 w-full active: scale-95'>Delete</button>
            </div>
          })}
        </div>
      
      </div>
    </div>
  
  )
}

export default App  