import React from 'react'
// import { menuItems } from '../assets/data'
import { footer_icons, menuItems } from '../assets/data'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaYoutube, FaWhatsapp, FaInstagram} from "react-icons/fa";



const Footer = () => {

  const iconMap = {
      github : <FaGithub />,
      linkedin : <FaLinkedin />,
      instagram : <FaInstagram />,
      youtube : <FaYoutube />,
  }

  return (
    <footer className="py-8 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8">

      <div className='container mx-auto text-center'>

        {/* Footer name */}
       <h2 className='text-xl font-semibold text-purple-500'>Shivam Gupta</h2>

       {/* Navigation links */}
       <nav className='flex flex-wrap justify-center text-sm sm:text-base space-x-4 sm:space-x-6 mt-4'>
        {menuItems.map((menuItem) => (
            <div key={menuItem.id}>
              <Link  to={menuItem.path} className={"hover:text-purple-500 text-sm sm:text-base my-1"}>
                {menuItem.label}
              </Link>
            </div>
          ))}
       </nav>

       {/* Social media icons */}
       <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {footer_icons.map((item,idx) => (
          <a key={idx} href={item.link}  target="_blank" rel="noopener noreferrer" className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'>{iconMap[item.icon]}</a>
       ))}
       </div>

      {/* Copyright Text */}
      <p className='text-sm text-gray-400 mt-6'> &copy; 2026 Shivam Gupta | All Rights Reserved </p>

      </div>
      
    </footer>
  )
}

export default Footer
