import { useEffect } from "react";
import { homeSkillsInfo } from "../../assets/data";
import HeroProfile from "../../components/HeroProfile";
import SkillsCard from "../../components/SkillsCard";
import TypingEffect from "../../components/TypingEffect";
import { Resume } from "../../assets/data";

const Home = () => {

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    {/* About Part */}
    <section className="py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-4 md:mt-6 lg:mt-8">

      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"> Hi, I'm </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"> Shivam Gupta </h2>

          {/* Skills Heading with Typing Effect */}
         <TypingEffect />

          {/* About Me Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I'm a frontend developer with hands-on experience in React, Tailwind CSS, and Redux through a internship and Industry experience. I also have working knowledge of Node.js, Express, MongoDB & MySQL gained through personal projects and self-learning. I'm a highly motivated to build efficient, scalable, and user-friendly web applications.
          </p>

          {/* Resume Button */}
          <a href={Resume.resume} target="_blank" rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #8245ec, #a855f7)', boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',}}>
            DOWNLOAD CV
          </a>
        </div>

         {/* Right side */}
        <HeroProfile />  

      </div>

    </section>

     {/* Skills Part*/}
    <div className="py-4 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16">

      {/* Heading */}
      <div className='text-center mb-8'>
       <h2 className='text-2xl sm:text-3xl font-bold text-white'>SKILLS</h2>
       {/*Heading  underline */}
       <div className='w-24 h-1 bg-[#8245ec] mx-auto mt-2'></div>
       {/* paragraph */}
       <p className='text-gray-400 mt-4 text-sm sm:text-base font-semibold'>A collection of my technical skills and expertise through various Projects and Experiences</p>
      </div>

      {/* Skills categories */}  
      <SkillsCard  skillsInfo={homeSkillsInfo}/>

    </div>
    </>
  );
};

export default Home;
