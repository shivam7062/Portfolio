import React, { useEffect } from 'react'
import { experiences } from '../../assets/data';
import TimelineCard from '../../components/TimelineCard';


const Experience = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section className="py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8">

       {/* Heading */}
      <div className='text-center mb-16'>
       <h2 className='text-2xl sm:text-3xl font-semibold  text-white'>EXPERIENCE</h2>
       {/*Heading  underline */}
       <div className='w-32 h-1  bg-[#8245ec] mx-auto mt-2'></div>
       {/* paragraph */}
       <p className='text-gray-400 mt-4 text-sm sm:text-base font-semibold'>A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

       {/* Experience Card (Experience Timeline)*/}  
      <TimelineCard datas={experiences} />
    
    </section>
  )
}

export default Experience




