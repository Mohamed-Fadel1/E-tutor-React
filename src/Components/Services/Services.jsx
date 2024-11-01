import React from 'react';
import { ServicesData } from './ServicesData';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div id='services' className='overflow-hidden'>
      <div className="container py-24 text-center">
        <div className=' mb-8 md:mb-10 md:w-1/2 md:m-auto'>
          <h4 className='text-lg font-bold text-orange-600 mb-4'>Why Choose us</h4>
          <h1 className='text-4xl font-bold leading-tight'>Benefits of online tutoring services with us</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'> 
          {ServicesData.map((ele, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.3 
                }}
                key={ele.id} 
                className='text-center px-7 py-4 rounded-xl bg-white' 
                style={{ boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)' }}
              >
                <div style={{ background: ele.bgColor }} className='text-3xl mb-2 h-10 w-10 flex items-center justify-center text-white rounded-lg'>
                  {ele.icon}
                </div>
                <div className='text-left'>
                  <h2 className='font-semibold text-black py-5'>{ele.title}</h2>
                  <p className='text-gray-500'>{ele.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </div>
  );
}

export default Services;
