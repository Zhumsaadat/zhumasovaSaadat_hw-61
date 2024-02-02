import { useState } from 'react'
import './App.css'
import MainBlog from './conainers/MainBlog/MainBlog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBlog />
    </>
  )
}

export default App
