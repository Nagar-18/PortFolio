import React, { useContext, useEffect, useState } from 'react'
import themeContext from '../context/Contex';

const Footer = () => {
     const {mode} =useContext(themeContext);
 const [value,setValue]=useState("grey-900");
 
useEffect(()=>{
  if(mode)
  {
    setValue("grey-900");
    
  }
  else{
    setValue("teal-900");
  }

},[mode])
return <div className={`py-4 text-center bg-primary mb-0 text-${!mode?"white":"black"} bg-${value}`}> &copy; 2024 Made With React And Tailwind</div>;
};


export default Footer;
