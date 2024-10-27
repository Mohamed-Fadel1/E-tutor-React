import React from 'react'
import { testimonialsData } from './TestimonalsData'
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000 ,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    
    return (
      <>
        <div id='testimonial' className="container py-16 text-center ">

          <div className='mb-8'>
              <h4 className='text-xl text-orange-600 mb-6 font-bold'>OUR TESTIMONIALS</h4>
              <h1 className='text-3xl font-semibold'>What Our Students Say About Us</h1>
          </div>

          <Slider {...settings}>
            {testimonialsData.map((ele) => (
              <div className='p-4' key={ele.id}> 
                <div className='flex flex-col p-8 shadow-lg rounded-xl bg-secondary/10'>
                  <div className='flex items-center justify-start gap-5'>
                      <img className='w-16 h-16 rounded-full' src={ele.img} alt="sliderImage" />
                      <div>
                          <p className='text-xl font-bold'>{ele.name}</p>
                          <p>{ele.name}</p>
                      </div>
                  </div>

                  <div className='text-sm text-gray-500 space-y-4 py-4 text-left'>
                      {ele.text}
                      <p className='flex gap-2 pt-3'>
                          <FaStar className='text-yellow-500 text-lg' /> 
                          <FaStar className='text-yellow-500 text-lg' /> 
                          <FaStar className='text-yellow-500 text-lg' /> 
                          <FaStar className='text-yellow-500 text-lg' /> 
                          <FaStar className='text-yellow-500 text-lg' /> 
                      </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </>
    )
}

export default Testimonials;
