import React from 'react'
import Tilt from 'react-parallax-tilt'


const SkillsCard = ({skillsInfo}) => {
    
  return (
    <div className='flex flex-wrap gap-1 lg:gap-5 justify-between'>

       
      {skillsInfo.map((category) => (
        <div key={category.title} className='bg-gray-900 backdrop-blur-md px-6 sm:px-4 py-8 sm:py-6 mb-10 w-full sm:w-[48%]  rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
        
         
        {/* category title */}
         <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>{category.title}</h3>

         {/* category skills */}
         <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >

         <div className='grid grid-cols-2 gap-3 w-full'>
         {category.skills.map((skill) => (
            <div key={skill.name} className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:px-2 sm:py-2 text-center'>
             <img src={skill.logo} alt={`${skill.name} logo`} className='w-6 h-6 sm:w-8 sm:h-8'/>
            <span className='text-xs sm:text-sm text-gray-300'>{skill.name}</span> 
            </div>
         ))}
         </div>

         </Tilt>
        
        </div>
      ))}

    </div>
  )
}

export default SkillsCard
