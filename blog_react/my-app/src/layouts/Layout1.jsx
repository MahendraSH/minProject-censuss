import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
const Layout1 = () => {
  return (
   <main>
    
    <Navbar/>
    <Outlet/>
   </main>
  )
}

export default Layout1
