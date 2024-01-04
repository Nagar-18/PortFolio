
   import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,InboxIcon,MoonIcon,SunIcon } from '@heroicons/react/24/outline'
import themeContext from '../context/Contex'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'AboutMe', href: '/about', current: false },
  { name: 'Projects', href: '/project', current: false },
  { name: 'ContactMe', href: '/contact', current: false },
]

function classNames(...classes) {

 
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
   const {mode,setMode} =useContext(themeContext);
 const [value,setValue]=useState("grey-900");
 
const handleSubmit=()=>{
  if(mode)
  {
    setValue("grey-900");
    
  }
  else{
    setValue("teal-900");
  }
  setMode(!mode);
}
  return (
    <div className={`bg-${value}`}>

    
    <Disclosure as="nav" className={` mb-1  border-red-50`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className={`flex space-x-4 text-${!mode?'white':'black'}`}>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : `text-gray-${!mode?'100':'900'} hover:bg-gray-900 hover:text-white`,
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute px-7 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                 <button className='bg-gray-900  text-gray-300 hover:bg-gray-100 hover:text-black
                          rounded-md px-3 mx-3 py-2 text-sm font-medium' >Resume</button>
             <button onClick={handleSubmit} className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              {!mode?<SunIcon className="block h-6 w-6" color='white'/>: <MoonIcon className="block h-6 w-6" color='white' />}</button>
               
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
  
