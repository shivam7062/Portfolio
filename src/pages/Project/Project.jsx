import React, { useEffect } from 'react'
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../assets/data';

const Project = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <section className="py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8 relative">

      {/* Heading */}
      <div className='text-center mb-16'>
       <h2 className='text-2xl sm:text-3xl font-semibold text-white'>PROJECTS</h2>
       {/*Heading  underline */}
       <div className='w-32 h-1  bg-[#8245ec] mx-auto mt-2'></div>
       {/* paragraph */}
       <p className='text-gray-400 mt-4 text-sm sm:text-base font-semibold'>A showcase of the projects I have worked on, highlighting my skills and experience in various technology</p>
      </div>

      {/* Project Cards */}
      <ProjectCard projects={projects}/>
    
    </section>
  )
}

export default Project
