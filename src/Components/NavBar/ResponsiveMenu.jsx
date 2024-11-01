import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden absolute top-20 w-full left-0 h-screen z-20"
          >
            <ul className="flex flex-col items-center bg-primary text-white py-10 m-6 rounded-3xl text-2xl gap-10 font-semibold">
        
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#subject">Subject</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
