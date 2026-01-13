import React, { useEffect } from 'react'
import TimelineCard from '../../components/TimelineCard'
import { education } from '../../assets/data'

const Education = () => {

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
     <section className="py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8">

       {/* Heading */}
      <div className='text-center mb-16'>
       <h2 className='text-2xl sm:text-3xl font-semibold text-white'>EDUCATION</h2>
       {/*Heading  underline */}
       <div className='w-32 h-1 bg-[#8245ec] mx-auto mt-2'></div>
       {/* paragraph */}
       <p className='text-gray-400 mt-4 text-sm sm:text-base font-semibold'>My education has been a journey of learning and development, Here are the details of my academic background</p>
      </div>

       {/* Experience Card (Experience Timeline)*/}  
      <TimelineCard datas={education} />
    
    </section>
  )
}

export default Education
