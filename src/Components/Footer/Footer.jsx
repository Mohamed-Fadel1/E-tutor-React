import React from 'react'
import footerImage from "../../assets/footer.jpg"
import { MdComputer } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const Footer = () => {

    const footerImg = {
        backgroundImage: `url(${footerImage})`,
        backgroundRepeat :"no-repeat",
        backgroundSize :"cover",
        backgroundPosition : "bottom center"
    }
  return (
    <div style={footerImg}>
      <div className='bg-primary/5'>
      <div className="container grid grid-cols-2 md:grid-cols-4 pt-20 pb-32 gap-20 text-black">

        <div className='col-span-2 md:col-span-1 px-4'>
            <div className='flex items-center gap-3 mb-8'>
                <MdComputer className='text-secondary text-2xl'/>
            <p className='text-2xl font-bold'>E-Tutor</p>
             </div>
             <p className='space-y-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab placeat quaerat doloribus odit perferendis autem blanditiis, nihil pariatur iusto accusamus.</p>
                <div className='flex gap-4 mt-5 text-xl'>
                    <FaLocationDot className='hover:text-secondary duration-200 transition cursor-pointer'/>
                    <FaLinkedin className='hover:text-secondary duration-200 transition cursor-pointer'/>
                    <FaFacebook className='hover:text-secondary duration-200 transition cursor-pointer'/>
                    <FaInstagram className='hover:text-secondary duration-200 transition cursor-pointer'/>
                </div>
        </div>

        <div className='px-4'>
        <p className='text-2xl font-bold mb-8'>Important Links</p>
        <ul className='space-y-2'>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Home</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>About</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Services</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Login</li>
        </ul>
        </div>

        <div className='px-4'>
        <p className='text-2xl font-bold mb-8'>Company Links</p>
        <ul className='space-y-2'>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Our Servies</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Contact</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Privacy Policy</li>
        </ul>
        </div>

        <div className='px-4'>
        <p className='text-2xl font-bold mb-8'>Resources</p>
        <ul className='space-y-2'>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Home</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>About</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Services</li>
            <li className='hover:text-secondary transition-all duration-200 cursor-pointer'>Login</li>
        </ul>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
