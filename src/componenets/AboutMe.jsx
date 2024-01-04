import React, { useContext } from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import github from '../assets/github.png'
import react from '../assets/react.png'

import js from '../assets/javascript.png'

import tailwind from '../assets/tailwind.png'
import themeContext from '../context/Contex'



const tech=[{
    techsrc:html ,
    style:'border-orange-100',
},

{
    techsrc:css ,
    style:'border-blue-100'
},
{
    techsrc:js
    ,
    style:'border-yello-100'
},
{
    techsrc:react,
    style:'border-aliceblue-900'
},
{
    techsrc:tailwind,
    style:'border-rose-100'
},
{
    techsrc:github,
    style:'border-rose-100'
},
]

const AboutMe = () => {
      const {mode} =useContext(themeContext);
  return (
    <>
       <div className=' flex justify-evenly'>
        {
tech.map((e)=>{
return (<div key={e.techsrc} className={`w-20 h-20 border border-r-3  p-4 ${!mode?e.style:'border-black'}`}><img src={e.techsrc}>
</img></div>)
})
        }
       </div>
       <div className={`px-28 py-10 text-${!mode?'white':'black'} flex justify-center align-middle`}>
          
            <div className='text-md font-mono'>
                <h5>(ABOUT ME)</h5>
                <p>I am react developer curretly pursuing Btech in cse from indore institute of science and technology. </p>
                <p>Furthermore, my passion for Data Structures and Algorithms has allowed me to tackle complex problem- solving scenarios efficiently. I have actively engaged in algorithmic challenges, participating in coding competitions and consistently honing my skills..</p>
                <p>Additionally, my expertise in MERN stack development provides me with a solid understanding of building modern, full-stack web applications. I am skilled in utilizing MongoDB, Express.js, React.js, and Node.js to create scalable and user-friendly web solutions</p>
                
             </div>
        </div>
  </>
  )
}

export default AboutMe
