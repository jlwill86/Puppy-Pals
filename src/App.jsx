import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
console.log(puppies)
  return (
    
      <div className='App'>
        { 
   puppies.map((puppy) => {
     return <p key={puppy.id}>{puppy.name}</p>;
   })
}
      </div>

    
  )
}

export default App
