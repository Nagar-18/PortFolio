import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ContextProvider from './context/ContexProvider.jsx'
import Project from './componenets/Project.jsx'
import AboutMe from './componenets/AboutMe.jsx'
import Contact from './componenets/Contact.jsx'
import Main from './componenets/Main.jsx'
import Header from './componenets/Header.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
            path: "/",
            element: <Main/>,
      },
      {
        path: "/project",
            element: <Project />,
      },
       {
        path: "/about",
            element: <AboutMe />,
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router}><App /></RouterProvider>
  </ContextProvider>,
)
