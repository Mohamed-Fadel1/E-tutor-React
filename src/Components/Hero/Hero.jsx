import React from 'react'
import HeroImage from "../../assets/hero-Dv8sjFKx.png"
import { FaPlay } from "react-icons/fa";
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <>
      <div className="container  overflow-x-hidden py-16 md:py-24 flex flex-col md:flex-row items-center justify-between space-y-2">

        <div className='md:w-[400px] text-center md:text-left mb-8 md:mb-0'>
            <motion.p 
            initial = {{opacity:0 , x : -100}}
            animate = {{opacity :1 , x :0}}
            transition={{duration : 1 , delay : 0.3}}
            className='text-xl text-orange-600 font-semibold'>100% Satisfaction Guarantee</motion.p>
            <motion.h1
                    initial = {{opacity:0 , x : -100}}
                    animate = {{opacity :1 , x :0}}
                    transition={{duration : 1 , delay : 0.4}}
             className=' text-5xl md:text-6xl md:leading-tight font-bold my-6'>Find Your Perfect <span className='text-primary'>Tutor</span></motion.h1>
            <motion.p 
               initial = {{opacity:0 , x : -100}}
               animate = {{opacity :1 , x :0}}
               transition={{duration : 1 , delay : 0.5}}
            className='text-gray-600 text-lg mb-6'>We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</motion.p>
           <motion.div 
              initial = {{opacity:0 , x : -100}}
              animate = {{opacity :1 , x :0}}
              transition={{duration : 1 , delay : 0.6}}
           className='space-x-6 flex'>
           <button className='btn-primary'>Get Started</button>
           <button className='flex items-center gap-2 text-lg font-semibold '> <span className='w-10 h-10 rounded-full flex items-center justify-center bg-blue-200'><FaPlay className=' text-secondary' /></span> See how it works</button>
           </motion.div>
        </div>

        <div className='md:w-1/2'>
            <motion.img 
            initial = {{opacity :0 , x : 200}}
            animate = {{opacity :1 , x : 0}}
            transition={{type : "spring" , stiffness : 100 , delay : 0.2}}
            src={HeroImage} alt="" />
        </div>

      </div>
    </>
  )
}

export default Hero
