import React, { useState } from "react";
import Image from "next/image";
import rahulImg from "../public/assets/rahul2-bg.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  //function to get values
  let name, value;
  const [userData, setUserData] = useState({
    name1: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const { name1, phone, email, subject, message } = userData;
  const submitData = async (e) => {
    e.preventDefault();

    if (name1 && phone && email && subject && message) {
      const res = fetch(
        "https://portfolio-dev-54a28-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name1,
            phone,
            email,
            subject,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name1: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        alert("Data filled");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please Fill the Data");
    }
  };
  return (
    <div id="contact" className="w-full lg:h-screen  ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400  rounded-xl p-4 ">
            <div className="lg:p-4 h-full ">
              <Image src={rahulImg} alt="image" />
              <div className="text-center">
                <h2 className="py-2">Chalat Rahul</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelancing and full time positions
                </p>
              </div>
              <div>
                <p className="py-4 uppercase">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-x-105 hover:ease-inhover:duration-300">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form id="contactForm">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name1"
                      id="name"
                      value={userData.name1}
                      onChange={postUserData}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                      id="number"
                      value={userData.phone}
                      onChange={postUserData}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                    value={userData.email}
                    onChange={postUserData}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    id="subject"
                    value={userData.subject}
                    onChange={postUserData}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    id="message"
                    value={userData.message}
                    onChange={postUserData}
                    required
                  ></textarea>
                </div>
                <button
                  onClick={submitData}
                  type="submit"
                  className="w-full p-4 text-black mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
