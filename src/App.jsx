// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useContext, useEffect, useState } from "react";
import Footer from "./componenets/Footer"
import Header from "./componenets/Header"
import Main from "./componenets/Main"
import themeContext from "./context/Contex";
import { Outlet } from "react-router-dom";


function App() {
   const {mode} =useContext(themeContext);
 const [value,setValue]=useState("bg-gradient-to-r from-slate-600 to-slate-900");
 useEffect(()=>{
  if(!mode)
  {
      setValue("bg-gradient-to-r from-slate-600 to-slate-900")
  }
  else
  {
    setValue("bg-teal-100")
  }
  
 },[mode])

  return (
    <>
   <div className={` static  ${value}  text`}>
    <div className='border-b-2 border-black' > <Header></Header></div>
    <br/>
   
    <main>
          <Outlet/>
        </main>
    
   <div className={`border-t-2 border-black  bottom-0 w-full`}><Footer ></Footer></div></div>
    </>
  )
}

export default App
