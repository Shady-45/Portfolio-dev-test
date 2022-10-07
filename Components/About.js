import Image from "next/image";
import AboutImage from "../public/assets/rahul-b.png";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello, my name is Rahul, and I'm a student at Chennai's Dr. MGR
            Educational and Research Institute studying electronics and
            communication engineering. 
          </p>

          <p className="py-2 text-gray-600">
            I attended Bethany School in Visakhapatnam for my formal education.
            I came to Chennai for my higher education after spending the
            majority of my youth there. I began studying HTML and CSS during the
            lockdown, which sparked my interest in coding.In my spare time, I
            try to programme the logos of well-known corporations using Codepen.
          </p>
          {/*  <p className="py-2 text-gray-600 cursor-pointer">
            Check out some of my latest projects
          </p> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImage} alt="image" height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default About;
