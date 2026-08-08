import React from 'react'
import { RiCertificate2Line } from "react-icons/ri";


const Certificate = () => {
    const cert = ["React.js Certificate on Udemy", "Cognizant Salesforce Certificate", "Android Application Workshop Using Flutter and Dart", "AWS Cloud Foundation", "Value added Course in AngularJS", "Stigmata Cloud Certificate"]
    return (
        <div className='md:px-38 px-8 min-h-screen py-24'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Certficates</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2   gap-3 font-bold">
                {cert.map((items) => {
                    return (
                        <div className='bg-[#F4F3F8] p-8 rounded-2xl shadow-lg mb-2 hover:-translate-y-2 transition-all duration-300'>
                            <p> <span className='font-bold text-3xl text-[#5540AF]'><RiCertificate2Line />
                            </span>{items}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Certificate