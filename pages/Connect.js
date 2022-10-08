import React from "react";

import ConnectImg from "../public/assets/projects/connect-4.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Connect = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ConnectImg}
          alt="iamge"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Connect-4</h2>
          <h3>HTML/ CSS / JQuery</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app is hosted on Netlify and was created with HTML and JQuery.
            The game has two players. The classic connect-four game can now be
            played by two players, just like it was in our youth.
          </p>
          <a
            href="https://github.com/Shady-45/Connect_Four-Game"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://helpful-pithivier-f2830f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JQuery
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Netlify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Connect;
