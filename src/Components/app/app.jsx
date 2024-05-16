import {Routes, Route } from 'react-router-dom'
import { Login, Main, Register ,Navbar } from '../'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App