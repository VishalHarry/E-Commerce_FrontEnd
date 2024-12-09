import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
  <div className='min-h-[100vh]'>
  <Outlet/>
  </div>
     <Footer/>
    </div>
  )
}

export default App
