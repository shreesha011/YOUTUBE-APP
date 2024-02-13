import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className="flex">

    <Sidebar/>
    {/* <MainContainer/> */}

    {/* Outlet component is used to render the child routes within the parent route(Body.js)  dynamically with help of Router Page*/}
    <Outlet/>

   </div>
  )
}

export default Body