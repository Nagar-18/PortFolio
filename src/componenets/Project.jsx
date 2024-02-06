import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css';

const projects=[
        {
        id:"1",
        imgsrc:"blogimg",
        title:"MediaX360",
        gitLink:"https://github.com/Nagar-18/mediax360",
        liveLink:"https://mediax360.vercel.app/",
        content:"A fulley fledged responsive website for a startup the founder show which i created this static website by my own it is made by tailwind and react. The best part of it that the website is fully responsive which can provide a better user interface to the users.This website is created for the start-up 'The-Founder-show'"

},
        {
        id:"1",
        imgsrc:"blogimg",
        title:"BlogWebsite",
        gitLink:"https://github.com/Nagar-18/MyBlog",
        liveLink:"https://bloggers-eight.vercel.app/",
        content:"when we hear a blog we thought a simple image and some content in it. we can create it through various language and thier framework. react-js and tailwind css is used for overall design React-Hook-Form for form functionality , React-Redux is used for state management and Appwrite as backend service is used"
        },

{
        id:"2",
        imgsrc:"",
        title:"BERN-Todo",
        gitLink:"https://github.com/Nagar-18//BERN-Web",
        liveLink:"https://bern-todo-front.vercel.app/",
        content:"BERN states a website that is formed with the intergation of centralized and decentralized backend it is a small prototype for futurestic website like voting  application. the website perform crud operation where create and update are done on blockchain and other simple operation performed on server"

},
// <<<<<<< HEAD
// // {
// //         id:"3",
// //         imgsrc:"",
// //         title:"StreamX",
// //         gitLink:"https://github.com/Nagar-18/StreamX",
// //         liveLink:"https://streamx-beta.vercel.app/",
// //         content:"A realtime stream web-application like Netflix where user can filter the shows accordingly.	Fetching of real-time API  from tmdb data base  and  use the fetched data effectively.	Redux-toolkit is used for state and data management.User can filterOut shows as trending and on the basis of genres."
// =======
// {
//         id:"1",
//         imgsrc:"blogimg",
//         title:"BlogWebsite",
//         gitLink:"https://github.com/Nagar-18/MyBlog",
//         liveLink:"https://bloggers-eight.vercel.app/",
//         content:"when we hear a blog we thought a simple image and some content in it. we can create it through various language and thier framework. react-js and tailwind css is used for overall design React-Hook-Form for form functionality , React-Redux is used for state management and Appwrite as backend service is used"
// >>>>>>> a0cb92ab1e7647d46717307c25b12cb771647e1d

// },

]
const Project = () => {
    
  return (
    <div  className='flex flex-col my-4 lg:h-full  h-fit  md:flex-row md:justify-evenly  '>

   
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
