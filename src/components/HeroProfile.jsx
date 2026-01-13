import React from 'react'
import Tilt from 'react-parallax-tilt'
import { Profile } from '../assets/data'

const HeroProfile = () => {
  return (
    <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-40rem md:h-40rem border-4 border-purple-700 rounded-full mb-6"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={Profile.image}
              alt="Profile"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
  )
}

export default HeroProfile
