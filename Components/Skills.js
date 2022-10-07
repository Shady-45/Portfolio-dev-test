import React from "react";
import Image from "next/image";
import HtmlImage from "../public/assets/skills/html.png";
import CssImage from "../public/assets/skills/css.png";
import JavaScriptImage from "../public/assets/skills/javascript.png";
import ReactImage from "../public/assets/skills/react2.png";
import TailwindImage from "../public/assets/skills/tailwind.png";
import FirebaseImage from "../public/assets/skills/firebase.png";
import GithubImage from "../public/assets/skills/github1.png";
import WordpressImage from "../public/assets/skills/Wordpress.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1248px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8
"
        >
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlImage} width={64} height={64} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={CssImage} width={64} height={64} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src={JavaScriptImage}
                  width={64}
                  height={64}
                  alt="image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImage} width={70} height={70} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImage} width={64} height={64} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImage} width={64} height={64} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>FireBase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image src={GithubImage} width={64} height={64} alt="image" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl shadow-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4  justify-center items-center">
              <div className="m-auto">
                <Image
                  src={WordpressImage}
                  width={64}
                  height={64}
                  alt="image"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
