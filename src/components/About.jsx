import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { motion } from 'motion/react';


const About = () => {
    return (
        <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:0.8}} 
        className='md:px-38 px-8 min-h-screen py-24' id='about'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>About me</h1>
            <p className='font-bold md:text-4xl mb-8'>Building scalable web applications with React.js and modern JavaScript.</p>
            <p className='font-medium'>Innovative and results-driven software developer with a B.Tech in Information Technology, passionate about crafting seamless user experiences through elegant front-end solutions. With a strong foundation in <span className='font-extrabold text-[#5540AF]'>HTML, Css, JavaScript, React Js, Node Js, Express Js, MongoDB, Tailwind css</span>. I bring creativity and efficiency to every project. Experienced in collaborating with cross-functional teams to deliver high-quality, user-centric applications. Seeking opportunities to contribute my skills and drive innovation in front-end development.</p>

            <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="education py-8">
                <p className='text-[#5540AF] font-extrabold text-xl'>Education</p>
                <div className='bg-[#F4F3F8] font-bold flex items-center gap-10 p-8 rounded-2xl shadow-lg'>
                    <div>
                        <p className='text-4xl'><FaGraduationCap /></p>
                    </div>
                    <div>
                        <p>B.Tech Information Technology</p>
                        <p>St Joseph's Institute of Technology</p>
                        <p>CGPA: 8.08 (2019 - 2023)</p>
                    </div>


                </div>
            </motion.div>
        </motion.div>
    )
}

export default About