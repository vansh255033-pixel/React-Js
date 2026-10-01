import React from 'react'

const App = () => {

  const user = {
    username : 'Vansh',
    age : 20,
    location : 'Bhootiya Haweli',
  }

  localStorage.setItem('user',JSON.stringify(user));
  const usera = JSON.parse(localStorage.getItem('user'));
  console.log(usera);
  return (
    <div>
      
    </div>
  )
}

export default App