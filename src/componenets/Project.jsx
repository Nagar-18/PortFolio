import React from 'react'
import Card from './Card'

const projects=[{
        id:"1",
        imgsrc:"blogimg",
        title:"BlogWebsite",
        gitLink:"https://github.com/Nagar-18/MyBlog",
        liveLink:"",
        content:"when we hear a blog we thought a simple image and some content in it. we can create it through various language and thier framework but i created it in production grade. react-js and tailwind css is used for overall design React-Hook-Form for form functionality , React-Redux is used for state management and Appwrite as backend service is used"

},
{
        id:"2",
        imgsrc:"",
        title:"NftWebsite",
        gitLink:"",
        liveLink:"",
        content:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"

}
]
const Project = () => {
    
  return (
    <div className='flex justify-evenly'>
        {
            projects.map((project)=>{
          return  <Card key={project.id} {...project} />
})
            
        }
      
    </div>
  )
}

export default Project
