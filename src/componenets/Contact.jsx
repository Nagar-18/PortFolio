import React, { useContext } from "react";
import themeContext from '../context/Contex';

 const Contact=()=> {
    const {mode} =useContext(themeContext);
     
  return (
    <section    className={`text-${!mode?'gray':'teal'}-100 lg:h-full  h-screen font-mono body-font relative`}>
      <div className="flex justify-center">  <h1 className="sm:text-3xl font-serif text-2xl font-medium title-font mb-4 text-rose-500">
             Contact Me
            </h1></div>
        <div   className="container  flex flex-col sm:flex-row px-3 py-3 mx-auto">
         
               <div className="lg:w-1/2    md:w-2/3 mx-auto ">
            <form action="https://getform.io/f/0ddd73f8-4dba-4a9a-b492-ea6161ba5172" method="POST">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                    
                  <label for="name" className={`leading-7 text-sm text-${!mode?'white':'black'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                  className={`leading-7 text-sm text-${!mode?'white':'black'}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-900 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className={`leading-7 text-sm text-${!mode?'white':'black'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-900 rounded border border-grey-800 focus:border-indigo-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-rose-500 border-0  py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                 Submit
                </button>
              
              </div>
              
            </div>
            
         </form> </div>
          <div className="flex flex-col text-center w-full mt-8 mb-1">
            
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             Lets work together!!
            </p>
             <div className="p-1 w-full pt-4 mt-2  border-gray-200 text-center">
                <a className="text-rose-500">pritamnagarp2@gmail.com</a>
                <p className="leading-normal my-2">
                  Vijay Nagar
                  <br />
                  Indore, MP (India)
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
          </div>
      
        </div>
      </section>
  );
}
export default Contact;
