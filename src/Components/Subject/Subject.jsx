import React from 'react'
import { subjectData } from './SubjectData'
import { motion } from 'framer-motion'

const Subject = () => {
  return (
    <>
      <div id='subject' className="container py-24 text-center overflow-hidden">
        <div className='mb-8'>
        <h4 className='text-xl text-orange-600 mb-6 font-bold'>Our tutor subjects</h4>
        <h2 className='text-3xl font-semibold'>Find Online Tutor in Any Subject</h2>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {subjectData.map((ele , index)=>{
                return (
                    <motion.div 
                    initial={{ opacity: 0, x: -120 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index*0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} 
                    key={ele.id}
                    className='flex gap-3 items-center border border-blue-200 p-4 rounded-lg cursor-pointer hover:shadow-xl'>
                    <div className='h-10 w-10 flex justify-center items-center' style={{ background: ele.color + "20", color: ele.color }}>
                        {ele.icon}
                    </div>
                    <div>{ele.subject}</div>
                </motion.div>
                
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Subject
