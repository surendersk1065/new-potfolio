import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import img1 from '../assets/img1.webp'
import { FaAngleUp } from "react-icons/fa";


const Home = () => {

    const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY >= window.innerHeight) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
}, []); 

    return (
<div className="flex flex-col lg:flex-row items-center px-6 lg:px-16 gap-10 text-white" id='home'>

    {/* Image Section */}
    <div className="w-full lg:w-[40%] flex justify-center">
        <img
            src={img1}
            alt="Surender"
            className="w-72 sm:w-64 md:w-72 lg:w-[500px]"
        />
    </div>

    {/* Content Section */}
    <div className="w-full lg:w-[60%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hello I'm Surender S!
        </h1>

        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-8">
            <p className="text-xl sm:text-2xl">Let's Connect</p>

            <MdOutlineKeyboardArrowRight className="text-4xl" />

            <a
                href="https://www.linkedin.com/in/surender-s-a1097a207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:-translate-y-2 transition-all duration-300"
            >
                <FaLinkedin />
            </a>

            <a
                href="https://github.com/surendersk1065?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:-translate-y-2 transition-all duration-300"
            >
                <FaGithub />
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=surendersk1065@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:-translate-y-2 transition-all duration-300"
            >
                <CiMail />
            </a>
        </div>
    </div>

    {isScrolled && (
    <a href='#nav'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-[#5540AF] rounded-full p-1 cursor-pointer fixed bottom-6 right-6 z-50"
    >
        <p className="text-5xl text-white">
            <FaAngleUp />
        </p>
    </a>
)}

</div>
    )
}

export default Home