import React, { useState, useEffect } from "react";
import Image from "next/image";
import ProfileImg from "../public/assets/cr.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/Property" ||
      router.asPath === "/Crypto" ||
      router.asPath === "/Netflix" ||
      router.asPath === "/Twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShawdow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShawdow);
  }, []);
  const toggleFunction = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "w-full fixed h-20 shadow-xl z-[100] "
          : "w-full fixed h-20  z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={ProfileImg} width={125} height={120} alt="image" />
        <div className="md:hidden lg:inline-block">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">about</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">skills</li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:border-b">
                project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={toggleFunction} className="">
            <AiOutlineMenu className="text-3xl md:hidden" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed md:hidden left-0 top-0 w-full h-screen bg-black/70" : " "
        }
      >
        <div
          className={
            nav
              ? "left-0 top-0 w-[75%]  md:w-[45%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500  "
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500  "
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              <Image
                src="/../public/assets/c-removebg-preview.png"
                width={125}
                height={120}
                alt="image"
              />
              <div
                onClick={toggleFunction}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] my-4 ">
                let's build something legendary together
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase py-4 flex flex-col ">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link className="scroll-smooth" href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  about
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  skills
                </li>
              </Link>
              <Link href="/#project">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-30">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between mt-4  w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
                  <a href="https://www.linkedin.com/in/rahul-chalat-784857193/">
                    <FaLinkedin />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-in hover:duration-300">
                  <a href="https://github.com/Shady-45">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-in hover:duration-300">
                  <a href="mailto:rahulchalat@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
