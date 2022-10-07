import { AiOutlineAim, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  /*   const el = React.useRef(null);
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: ["A", "Front", "End", "Developer"],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(el.current, options);
  });
 */
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center  ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something togetheir{" "}
          </p>
          <h1 className="py-2 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Rahul</span>
          </h1>
          <h1 className="py-4 text-gray-700 ">
            <span id="typed">A Front-End Developer</span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I design and Develop Front End Dynamic Websites, Currently I'm
            learning NodeJS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
              <a href="https://www.linkedin.com/in/rahul-chalat-784857193/">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
              <a href="https://github.com/Shady-45">
                {" "}
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
              <a href="mailto:rahulchalat@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
