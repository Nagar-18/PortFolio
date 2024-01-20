import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css';
const projects=[{
        id:"3",
        imgsrc:"",
        title:"StreamX",
        gitLink:"https://github.com/Nagar-18/StreamX",
        liveLink:"https://streamx-beta.vercel.app/",
        content:"A realtime stream web-application like Netflix where user can filter the shows accordingly.	Fetching of real-time API  from tmdb data base  and  use the fetched data effectively.	Redux-toolkit is used for state and data management.User can filterOut shows as trending and on the basis of genres."

},
{
        id:"2",
        imgsrc:"",
        title:"BERN-Todo",
        gitLink:"https://github.com/Nagar-18//BERN-Web",
        liveLink:"https://bern-todo-front.vercel.app/",
        content:"BERN states a website that is formed with the intergation of centralized and decentralized backend it is a small prototype for futurestic website like voting  application. the website perform crud operation where create and update are done on blockchain and other simple operation performed on server"

},
{
        id:"1",
        imgsrc:"blogimg",
        title:"BlogWebsite",
        gitLink:"https://github.com/Nagar-18/MyBlog",
        liveLink:"https://bloggers-eight.vercel.app/",
        content:"when we hear a blog we thought a simple image and some content in it. we can create it through various language and thier framework. react-js and tailwind css is used for overall design React-Hook-Form for form functionality , React-Redux is used for state management and Appwrite as backend service is used"

},

]
const Project = () => {
    
  return (
    <div  className='flex flex-col my-4  px-4 sm:flex-row sm:justify-evenly  '>

   
     {projects.map((project)=>{
           return<Card key={project.id}  {...project} />
})
            
        }
      
      ...
    {/* </Swiper> */}
     
      
    </div>
  )
}

export default Project
