import React from 'react'
import Section1 from './components/Section-1/Section1'
import Section2 from './components/Section-2/Section2'

const App = () => {

  const users = [
    {
      img : 'https://images.unsplash.com/photo-1790560281479-a93654c2bbba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'UnderBanked'
    },
    {img : 'https://images.unsplash.com/photo-1790014392947-a42155c882f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'UnderServed'
    },
    {img : 'https://images.unsplash.com/photo-1790105684809-6697eed86bfb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D',
      intro : '',
      tag : 'Passionate'
    },
  ]
  return (
    <div className = ''>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App