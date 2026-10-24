import React from 'react'
import { RiCertificate2Line } from "react-icons/ri";
import { motion } from 'motion/react';


const Certificate = () => {
    const cert = ["Full Stack Mern Development Bootcamp(EMC)","React.js Certificate on Udemy", "Cognizant Salesforce Certificate", "Android Application Workshop Using Flutter and Dart", "AWS Cloud Foundation", "Value added Course in AngularJS", "Stigmata Cloud Certificate"]
    return (
        <motion.div
        initial={{opacity:0,y:200}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:0.8}}
        className='md:px-38 px-8 min-h-screen py-24'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Certficates</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2   gap-3 font-bold">
                {cert.map((items) => {
                    return (
                        <div className='bg-[#F4F3F8] p-8 rounded-2xl shadow-lg mb-2 hover:-translate-y-2 transition-all duration-300'>
                            <motion.p
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            > <span className='font-bold text-3xl text-[#5540AF]'><RiCertificate2Line />
                            </span>{items}</motion.p>
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Certificate