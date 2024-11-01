import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import InfoNavBar from './Components/InfoNavBar/InfoNavBar';
import NumberCounter from './Components/NumberCounter/NumberCounter';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Banner2 from './Components/Banner2/Banner2';
import Subject from './Components/Subject/Subject';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import { FaHandPointUp } from "react-icons/fa";

const App = () => {
  const [up, setUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setUp(true);
      } else {
        setUp(false);
      }
    };

  
    window.addEventListener('scroll', handleScroll);

  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {up && (
        <span className='fixed bottom-5 right-5 text-3xl cursor-pointer z-30'>
          <a href="#home"><FaHandPointUp className='text-primary' /></a>
        </span>
      )}
      
    <div className='bg-gray-50 dark:bg-slate-900 dark:text-gray-200'>
    <NavBar />
      <InfoNavBar />
      <Hero />
      <NumberCounter />
      <Services />
      <Banner />
      <Banner2 />
      <Subject />
      <Testimonials />
      <Footer />
    </div>
    </>
  );
}

export default App;
