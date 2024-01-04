import React, { useContext } from 'react'
import themeContext from '../context/Contex';


const Card = (props) => {
     const {mode} =useContext(themeContext);
     
  return (
    <div>
      

<div className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-${!mode?'gray':'teal'}-800 dark:border-gray-700`}>
    <a href="#">
        {/* <img className="rounded-t-lg w-full h-10" src={props.id==1?blogimg:null} alt="" /> */}
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className={`mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white'}`}>{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-white">{props.content}.</p>
        <a  href={props.gitLink} className="inline-flex items-center px-3 mx-3 py-2 text-sm font-medium text-center text-white bg-teal-600 rounded-lg hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Git-Repository
           
        </a>
         <a href={props.liveLink} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
           Live-Project
           
        </a>
    </div>
</div>

    </div>
  )
}

export default Card
