import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] =useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) =>response.json)
    .then((data) => setData(data))
  }, [])

  return (
    <>
      <ul>
        {
        data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>body:{item.body}</p>

          </li>
        ))
        }
      </ul>
    </>
  )
}

export default App
