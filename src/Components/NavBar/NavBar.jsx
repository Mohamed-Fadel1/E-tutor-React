import React, { useState } from 'react'
import { MdComputer } from "react-icons/md";
import { NavBarMenu } from './NavBarMenu';
import { IoMenuSharp } from "react-icons/io5";
import ResponsiveMenu from './ResponsiveMenu';



const NavBar = () => {
    const [ open , setOpen] = useState(false)
  return (
    <>
      <nav id='home'>
        <div className='container py-6 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <MdComputer className=' text-2xl lg:text-3xl text-secondary font-bold'/>
                <p className=' text-2xl lg:text-2xl font-bold'>E-Tutor</p>
            </div>
             
            <ul className=' gap-10 hidden lg:flex '>
  {NavBarMenu.map((item) => (
    <li className='text-gray-600 text-lg font-semibold hover:text-blue-600 transition-all duration-200 cursor-pointer' key={item.id}>
    
      <a href={item.link}>{item.title}</a>
    </li>
  ))}
</ul>

                <div className=' hidden  lg:flex items-center gap-3 '>
                    <button className='font-semibold text-xl'>Sign in</button>
                    <button className='bg-secondary px-7 font-bold py-2 text-gray-50 rounded-full'>Register</button>
                </div>

                <div className='lg:hidden'>
                    <IoMenuSharp onClick={()=>{setOpen(!open)}} className='text-3xl'/>
                </div>
        </div>
      </nav>
      <ResponsiveMenu open = {open}/>
    </>
  )
}

export default NavBar
