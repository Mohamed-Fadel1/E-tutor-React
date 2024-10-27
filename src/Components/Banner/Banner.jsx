import React from 'react'
import imgBanner1 from "../../assets/banner1-ChWN6Q7z.png"
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <>
      <div  className='bg-gray-50'>
        <div id='about' className="container flex flex-col md:flex-row items-center overflow-hidden py-20 ">

            <div className='md:w-1/2'>
                <motion.img 
                initial = {{opacity : 0 , scale : 0.5}}
                whileInView={{opacity :1 , scale :1}}
                transition={{type : "spring" , stiffness :100 , delay : 0.3 }}
                className='lg:w-3/4' src={imgBanner1} alt="Banner1" />
            </div>

            <div className='md:w-[500px] text-center md:text-left '>
  <motion.p 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    viewport={{ once: true }}
    className='text-orange-600 font-bold'>
    CUSTOMIZE WITH YOUR SCHEDULE
  </motion.p>
  
  <motion.h3
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
    className='text-xl md:text-2xl font-bold my-5'>
    Personalized Professional Online Tutor on Your Schedule
  </motion.h3>
  
  <motion.p
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    viewport={{ once: true }}
    className='text-gray-500 mb-8 leading-5'>
    Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.
  </motion.p>
  
  <motion.button 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: true }}
    className='btn-primary'>
    Get Started
  </motion.button>
            </div>

        </div>
      </div>

    </>
  )
}

export default Banner
