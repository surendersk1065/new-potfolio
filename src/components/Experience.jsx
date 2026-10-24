import React from 'react'
import { motion } from 'motion/react'

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='min-h-screen md:px-38 px-6 py-16 md:py-24 overflow-x-hidden'
            id='experience'
        >
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Experience</h1>

            <motion.div
                initial={{ opacity: 0, x: -50 }} // Reduced mobile offset to prevent extreme overflow
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className='bg-[#F4F3F8] font-bold p-6 md:p-8 rounded-2xl shadow-lg mb-6'
            >
                <div className='md:flex items-center justify-between'>
                    <div>
                        <p className='md:text-3xl text-xl mb-2 md:mb-4'>Nxtspire Pvt Limited</p>
                        <p className='text-[#5540AF] mb-1'>Full stack Developer Intern</p>
                        <p className='text-sm md:text-base text-gray-600'>sept 15 - oct-14, Chennai, India</p>
                    </div>
                    <div className='bg-[#5540AF] px-4 py-2 text-sm md:text-base text-white rounded-3xl inline-block md:block mt-4 md:mt-0'>
                        1 month
                    </div>
                </div>

                <div className='my-6'>
                    <p className='text-xl md:text-2xl mb-4'>Key Contribution</p>
                    <ul className='list-disc list-inside space-y-2 font-normal text-sm md:text-base'>
                        <li>Developed a responsive product landing page and documentation website for Webzspot Studio, an AI-powered photography platform, using React.js and Tailwind CSS.</li>
                        <li>Gained hands-on experience with Framer Motion by implementing scroll-based animations and interactive UI transitions.</li>
                        <li>Researched Hygraph CMS, explored its features, and documented the GraphQL API creation workflow.</li>
                    </ul>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }} // Reduced mobile offset
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className='bg-[#F4F3F8] font-bold p-6 md:p-8 rounded-2xl shadow-lg'
            >
                <div className='md:flex items-center justify-between'>
                    <div>
                        <p className='md:text-3xl text-xl mb-2 md:mb-4'>Niq India Pvt Limited</p>
                        <p className='text-[#5540AF] mb-1'>Data Processing Analyst</p>
                        <p className='text-sm md:text-base text-gray-600'>2024 - Present, Chennai, India</p>
                    </div>
                    <div className='bg-[#5540AF] px-4 py-2 text-sm md:text-base text-white rounded-3xl inline-block md:block mt-4 md:mt-0'>
                        2.2 years
                    </div>
                </div>

                <div className='my-6'>
                    <p className='text-xl md:text-2xl mb-4'>Key Contribution</p>
                    <ul className='list-disc list-inside space-y-2 font-normal text-sm md:text-base'>
                        <li>Focus: Working with US-based consumer packaged goods manufacturers and fast-moving consumer goods retailers.</li>
                        <li>Objective: Provide accurate, actionable information and insights to understand the complex and changing marketplace. Key Responsibilities are to Manage end-to-end client delivery.</li>
                        <li>Data Validation: Using SQL and Excel for data validation.</li>
                        <li>Data Analysis: Apply exploratory data analysis techniques to identify patterns, relationships, and trends for business improvement.</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Experience