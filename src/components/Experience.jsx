import React from 'react'
import { motion } from 'motion/react'

const Experience = () => {
    return (
        <motion.div
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:0.8}}
        className='min-h-screen md:px-38 px-8 py-24' id='experience'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Experience</h1>

            <motion.div
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.4}}
             className='bg-[#F4F3F8] font-bold p-8 rounded-2xl shadow-lg mb-5'>
                <div className='md:flex items-center justify-between'>
                    <div>
                        <p className='md:text-3xl text-xl mb-4'>Nxtspire Pvt Limited</p>
                        <p className='text-[#5540AF] '>Full stack Developer Intern</p>
                        <p>sept 15 - oct-14, Chennai, India</p>
                    </div>
                    <div className='bg-[#5540AF] p-3 text-white rounded-3xl inline-block md:block mt-4 md:mt-0'>
                        1 month
                    </div>

                </div>

                <div className='my-6'>
                    <p className='text-2xl mb-4'>Key Contribution</p>
                    <ul>
                        <li className='mb-3'>Developed a responsive product landing page and documentation website for Webzspot Studio, an AI-powered photography platform, using React.js and Tailwind CSS.</li>
                        <li className='mb-3'>Gained hands-on experience with Framer Motion by implementing scroll-based animations and interactive UI transitions.</li>
                        <li className='mb-3'>Researched Hygraph CMS, explored its features, and documented the GraphQL API creation workflow.</li>
                    </ul>
                </div>

            </motion.div>

            <motion.div
            initial={{opacity:0,x:100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.4}}
            className='bg-[#F4F3F8] font-bold p-8 rounded-2xl shadow-lg    '>
                <div className='md:flex items-center justify-between'>
                    <div>
                        <p className='md:text-3xl text-xl mb-4'>Niq India Pvt Limited</p>
                        <p className='text-[#5540AF] '>Data Processing Analyst</p>
                        <p>2024 - Present, Chennai, India</p>
                    </div>
                    <div className='bg-[#5540AF] p-3 text-white rounded-3xl inline-block md:block mt-4 md:mt-0'>
                        2.2 years
                    </div>

                </div>

                <div className='my-6'>
                    <p className='text-2xl mb-4'>Key Contribution</p>
                    <ul>
                        <li className='mb-3'>Focus: Working with US-based consumer packaged goods manufacturers and fast-moving consumer goods retailers.</li>
                        <li className='mb-3'>Objective: Provide accurate, actionable information and insights to understand the complex and changing marketplace. Key Responsibilities are to Manage end-to-end client delivery.</li>
                        <li className='mb-3'>Data Validation: Using SQL and Excel for data validation.</li>
                        <li className='mb-3'>Data Analysis: Apply exploratory data analysis techniques to identify patterns, relationships, and trends for business improvement.</li>
                    </ul>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Experience