import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {

    const contact = [
        {
            id: 1,
            name: "LinkedIn",
            logo: <FaLinkedin />,
            descp: "Waiting for connection",
            link: "https://www.linkedin.com/in/surender-s-a1097a207/"
        },
        {
            id: 2,
            name: "GitHub",
            logo: <FaGithub />,
            descp: "View My Repositories",
            link: "https://github.com/surendersk1065?tab=repositories"
        },
        {
            id: 3,
            name: "Gmail",
            logo: <CiMail />,
            descp: "Contact me",
            link: "https://mail.google.com/mail/?view=cm&fs=1&to=surendersk1065@gmail.com"
        },
        {
            id: 4,
            name: "Contact No",
            logo: <FaPhoneAlt />,
            descp: "7397416604",
        },
    ]

    return (
        <>
            <div className='md:px-38 px-8 min-h-screen py-24' id='contact'>
                <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Contact</h1>

                <div className='text-center'>
                    <div className='font-medium my-10 text-lg'>
                        <p className='text-2xl mb-4 font-bold'>Let's Connect</p>
                        <p>I'm actively seeking Software Engineer, Full Stack Developer, Frontend Developer, Web developer, React js Developer opportunities. Feel free to reach out for full-time roles.</p>
                    </div>
                </div>
                <div className='grid grid-cols-2  lg:grid-cols-4 gap-3 '>
                    {contact.map((items) => {
                        return (
                            <a href={items.link} target='_blank' className='bg-[#F4F3F8] p-8 rounded-2xl shadow-lg mb-2 hover:-translate-y-2 transition-all duration-300 font-bold ' >
                                <p className='text-4xl text-[#5540AF] mb-3'>{items.logo}</p>
                                <p className='mb-3'>{items.name}</p>
                                <p>{items.descp}</p>
                            </a>
                        )
                    })}

                </div>

                <div className="flex justify-center" >
                    <div className="my-8 bg-[#5540AF] px-6 py-3 rounded-xl text-white font-semibold cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                        <a href='/surenderMyresume.docx'>Download My Resume</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contact