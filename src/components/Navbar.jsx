// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Scroll page smoothly to the top when user click on logo
  const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    //  <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] 
      //  ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>

       <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] 
      bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md`}>
 
      <div className="text-white py-5 flex justify-between items-center">

        {/* Logo */}
        <div onClick={scrollTop} className="text-lg font-semibold cursor-pointer">
          <Link to="/">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Shivam</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Gupta</span>
            <span className="text-[#8245ec]">&gt;</span>
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <NavLink  to={menuItem.path} className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
                {menuItem.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Media icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/shivam7062" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shivam7062" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]" >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? 
          ( <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)}/>) 
          : ( <TfiMenuAlt className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true) } /> )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-5/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden ">
          <ul className="h-screen flex flex-col items-center space-y-8 py-4 text-gray-300">
      
            {menuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <NavLink to={menuItem.path} onClick={() => setIsOpen(false)}
                  className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}>
                  {menuItem.label}
                </NavLink>
              </li>
            ))}

             {/* Mobile Social Media icons */}
            <div className="flex space-x-4">
              <a href="https://github.com/shivam7062" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shivam7062" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
