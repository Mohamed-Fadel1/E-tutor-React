import React from 'react'
import imgBanner2 from "../../assets/banner2-BMWB7nzP.png"
import { motion } from 'framer-motion'
const Banner2 = () => {
  return (
    <>
        <div className='bg-gray-50'>
        <div className="container py-20 flex flex-col-reverse md:flex-row justify-between gap-6 lg:gap-36 items-center overflow-hidden ">

            <div className='md:w-1/2  text-center md:text-left '>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
            className='text-orange-600 font-bold'>CUSTOMIZE WITH YOUR SCHEDULE</motion.p>
            <motion.h3 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
            className='text-xl md:text-2xl font-bold my-5'>Talented and Qualified Tutors to Serve You for Help</motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
            className='text-gray-500 mb-8 leading-5'>Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used</motion.p>
            <motion.button 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
            className='btn-primary'>Get Started</motion.button>
            </div>

            <div className='md:w-1/2'>
                <motion.img 
                    initial = {{opacity : 0 , scale : 0.5}}
                    whileInView={{opacity :1 , scale :1}}
                    transition={{type : "spring" , stiffness :100 , delay : 0.3 }}
                className='md:w-3/4' src={imgBanner2} alt="imgBanner2" />
            </div>
    

        </div>
      </div>
    </>
  )
}

export default Banner2
