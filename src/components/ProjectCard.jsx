import React, { useState } from 'react'

const ProjectCard = ({projects}) => {
 
  const [selectedProject, setSelectedProject] = useState(null)
  const [showMore, setShowMore] = useState(false)

  // Open Modal function
  const handleModal = (project) => {
      setSelectedProject(project)
  }

  return (
    // Project Card Grid
    
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2'> 

    {/* Project items */}
      {projects.map((project) => (
        <div key={project.id} onClick={() => handleModal(project)} className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'>
     
     {/* Project Image */}
     <div className='p-4'>
        <img src={project.image} alt={project.title} className='w-full h-50 object-contain rounded-xl'/>
     </div>

     {/* Title, Description & Tags */}
     <div className='p-6'>
      <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
      <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.description}</p>
      <div className='mb-4'>
        {project.tags.map((tag, index) => (
            <span key={index} className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-4 py-2 mr-2 mb-2'>{tag}</span>
        ))}
      </div>
     </div>

        </div>
      ))}

      {/* Modal Container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4'>
       <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative'>

      {/*Modal cross button */}
        <div className='flex justify-end p-2'>
          <button onClick={() =>setSelectedProject(null)} className='text-white text-3xl font-bold hover:text-purple-500'> &times; </button>
        </div>

      {/* Modal Content */}
      <div className="flex flex-col">

      {/* Image */}
      <div className="w-full h-[40vh] flex justify-center items-center bg-gray-900 px-4">
      <img src={selectedProject.image} alt={selectedProject.title} className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"/>
      </div>

      {/* Title, Description, Tags buttons, Link buttons*/}
      <div className='p-2 lg:p-4'>

       <h3 className='lg:text-3xl font-bold text-white mb-2 text-md'>{selectedProject.title}</h3>

       <p className='text-gray-400 mb-4 lg:text-base text-sm inline'>  
        {showMore ? selectedProject.description : selectedProject.description.slice(0,100) + "..."} </p>
        <button onClick={() => setShowMore(!showMore)} className='text-blue-500 text-sm hover:underline mb-4'>{showMore ? "view less" : "view more"}</button>

       <div className='flex flex-wrap gap-2 mb-6'>  
         {selectedProject.tags.map((tag,index) => (
          <span key={index} className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'>{tag}</span>
         ))}
       </div>

       <div className='flex gap-4'>
         <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-800 hover:bg-purple-400 px-2 py-1 lg:px-6 lg:py-2 rounded-xl text-sm lg:text-xl font-semibold text-center'>View Code</a>
         <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-purple-600 hover:bg-purple-400 px-2 py-1 lg:px-6 lg:py-2 rounded-xl text-sm lg:text-xl font-semibold text-center'>View Live</a>
       </div>

      </div>

      </div>

       </div>
        </div>
      )}

    </div>
  )
}

export default ProjectCard
