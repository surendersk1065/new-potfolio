import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import img1 from '../assets/img1.webp'
import { FaAngleUp } from "react-icons/fa";
import { motion } from 'motion/react';
import { section } from 'motion/react-client';

const Hometext = () => {
    return (
        <section className='relative z-30'>
            <div className="flex flex-col lg:flex-row items-center px-6 lg:px-16 gap-10 text-white" id='home'>
                {/* Imgae */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                    className="w-full lg:w-[40%] flex justify-center">
                    <img
                        src={img1}
                        alt="Surender"
                        className="w-72 sm:w-64 md:w-72 lg:w-[500px]"
                    />
                </motion.div>

                {/* Content */}
                <motion.div
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                transition={{duration:2}} 
                className="w-full lg:w-[60%] text-center lg:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Hello I'm Surender S!
                    </h1>

                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-8">
                        <p className="text-xl sm:text-2xl">Let's Connect</p>

                        <MdOutlineKeyboardArrowRight className="text-4xl" />

                        <motion.a
                            href="https://www.linkedin.com/in/surender-s-a1097a207/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl"
                            whileTap={{scale:0.9}}
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a
                            href="https://github.com/surendersk1065?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl"
                            whileTap={{scale:0.9}}
                        >
                            <FaGithub />
                        </motion.a>

                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=surendersk1065@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl"
                            whileTap={{scale:0.9}}
                        >
                            <CiMail />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default Hometext