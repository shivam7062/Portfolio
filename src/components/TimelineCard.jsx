import React from "react";

const TimelineCard = ({ datas }) => {
  return (
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-6 sm:left-1/2 top-0 w-1 transform -translate-x-1/2 sm:translate-x-1/2  bg-white/30 h-full"></div>

      {/* Experiences & Education Items */}
      {datas.map((data, idx) => (
        <div key={data.id} className={`relative flex flex-col sm:flex-row items-center mb-16 
          ${data.type === "experiences" ? idx % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
          : idx % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>

          {/* Timeline Circle */}
          <div className="absolute left-6 sm:left-1/2 top-0 transform -translate-x-1/2 z-20 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
            <img src={data.img} alt={data.organization} className="w-full h-full object-cover rounded-full"/>
          </div>

          {/* Card Wrapper */}
          <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? "sm:pl-4" : "sm:pr-2"} pl-10 pr-2 sm:pl-2`}>

            {/* Card */}
            <div className="bg-[#0f0f1a]/80 backdrop-blur-xl border border-white/20 rounded-3xl p-4 shadow-[0_0_30px_rgba(130,69,236,0.35)]  transition-all duration-300 hover:scale-[1.03]">

              {/* Header */}
              <div className="flex items-center gap-5">

                {/* Organization Logo */}
                <div className="w-20 sm:w-16 bg-white rounded-md overflow-hidden flex items-center justify-center">
                  <img src={data.img} alt={data.organization} className="w-full h-full object-cover"/>
                </div>

                {/* Role, Marks, Organization name and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    {data.type === "experiences" && (<h3 className="text-xl sm:text-2xl font-semibold text-white">{data.role}</h3>)}
                    {data.type === "education" && (<h3 className="text-xl sm:text-xl font-semibold text-white mt-4">{data.degree}</h3>)}
                    <h4 className="text-md sm:text-base text-gray-300 mt-1 mb-2">{data.organization}</h4>
                  {data.type==="education" && (<h5 className="text-sm sm:text-base text-gray-500 mt-1">{idx===0? `CGPA : ${data.grade}` : `Marks : ${data.grade}`}</h5>)}
                  </div>

                  {/* Date */}
                  <p className="text-sm text-gray-500 mt-1">{data.date}</p>

                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-400">{data.desc}</p>
              
              {/* Skills Lists and Degree */}
              {data.type === "experiences" && (<div className="mt-4">
                <h5 className="font-medium text-white">Skills :</h5>
                <ul className="flex flex-wrap mt-2">
                  {data.skills.map((skill, index) => (
                    <li key={index} className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400">{skill}</li>
                  ))}
                </ul>
              </div>) 
            }

            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default TimelineCard;
