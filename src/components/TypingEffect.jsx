import React from "react";
import Typewriter from "typewriter-effect";

const TypingEffect = () => {
  return (
    <>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
        <div className="text-white">I'm a </div>
        <span className="inline-flex">
          <Typewriter
            options={{
              strings: [
                "Fullstack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Coder",
              ],
              autoStart: true,
              loop: true,
              cursorRenderer: (cursor) => <span>{cursor}</span>,
              typeSpeed: 100,
              deleteSpeed: 50,
              delaySpeed: 500,
            }}
          />
        </span>
      </h3>
    </>
  );
};

export default TypingEffect;
