import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// images 
import Banner_image from '../assets/istockphoto-543212762-2048x2048.jpg'
import Logo from "../assets/logo.webp"

// import './styles/styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

const Hero = () => {
    return (
        <>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide className=' bg-cover bg-no-repeat bg-[50%] pt-20' style={{backgroundImage: `url(${Banner_image})`}}>
            <div className='w-full h-full bg-black bg-opacity-55 flex justify-center items-center py-40'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                        <img src={Logo} alt="company logo" className='w-20' /> 
                        <h1 className='text-orange-400 text-4xl md:text-5xl xl:text-6xl font-bold'>JM INTERNATIONAL</h1>
                    </div>
                   
                   <p className='text-orange-500 text-3xl text-center w-4/5 md:w-3/4 lg:w-1/2 mt-8'>শুধুমাত্র নদীয়া এবং মুর্শিদাবাদে ডেলিভারি করা হয় DELIVERY: NADIA AND MURSHIDABAD DISTRIC ONLY</p>
                   <button type="button" className='px-4 py-2 mt-10 text-lg bg-orange-500 text-white rounded-sm'>Shop Now</button>
                </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className='w-12 h-36 bg-black'></SwiperSlide> */}
       
        </Swiper>
      </>
    );
};

export default Hero;