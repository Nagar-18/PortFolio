import React, { useContext, useEffect, useState } from 'react'
import  git from "../assets/git.jpeg"
import leetcode from "../assets/leet.png";
import linked from "../assets/link.png";
import themeContext from '../context/Contex';

const Main = () => {
    const {mode,setMode} =useContext(themeContext);
 const [value,setValue]=useState("white");
 
useEffect(()=>{
  if(!mode)
  {
    setValue("white");
    
  }
  else{
    setValue("black");
  }
  // setMode(!mode);
},[mode])
  return (
    <><br/>
    <div style={{height:'80vh'}} className={`w-full  text-${value}  mt-8  font-semibold font-sans`} >
        <div><h1 className={`flex justify-around  text-5xl ${!mode?"text-teal-400":"text-slate-500"} mb-4`}>Pritam Nagar</h1></div>
        <div className='flex justify-around text-2xl mb-4'>React Devloper and Designer </div>
        <div className='flex justify-center m-auto   px-9 mb-4'>Freelancer providing services for programming and design content.</div>
        <div className='flex justify-around  mb-6'>  <p>Join me down below & let's get Cracking. </p></div>
        {/* <div className=' flex justify-around px-5'>   */}
        <div className="flex justify-center">
                <a
                  type="button"
                  href='https://github.com/Nagar-18/'
                  className={` mx-3 relative rounded-full bg-gray-800 p-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                >
                  <span className="absolute -inset-1.5" />
                  
                  <img className='h-7 w-7  rounded-full' src={git} alt="#"></img>
                   
                </a> 
                <a
                  type="button"
                   href='https://leetcode.com/Nagar_18/'
                  className=" relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  
                  <img className='h-7 w-7  rounded-full' src={leetcode} alt='#'></img>
                   
                </a>
                <a
                  type="button"
                   href='https://www.linkedin.com/in/pritam-nagar-5abb1b241/'
                  className=" mx-3 relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  
                  <img className='h-7 w-7  rounded-full' src={linked} alt='#'></img>
                   
                </a>
                </div>
               
                
              {/* </div> */}
    </div>
    </>
  )
}

export default Main
