import { useState } from 'react'
import React from 'react'
import logo from '../images/logo.svg'
import FundingPlatform from './FundingPlatform'

import { BrowserRouter } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav[!nav]
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1248px] mx-auto px-4'>
        <img src="" alt="" />
        <ul className='flex'>
            <img className='w-20' src={logo} alt="" />
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Home</li>
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Mentorship</li>
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"><a href='#fund'>Funding</a></li>
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Market</li>
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Discussion</li>
            <li className="cursor-pointer p-4 text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">Resources</li>
        </ul>
        <div className='fixed left-0 top-0 w-[60%] hidden'>
            <aiOutlineMenu size ={20}/>
            <ul className='pt-12'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Mentorship</li>
            <li className='p-4'>Funding</li>
            <li className='p-4'>Market</li>
            <li className='p-4'>Discussion</li>
            <li className='p-4'>Resources</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar