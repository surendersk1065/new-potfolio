import React from 'react'

const Experience = () => {
    return (
        <div className='min-h-screen md:px-38 px-8 py-24' id='experience'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Experience</h1>

            <div className='bg-[#F4F3F8] font-bold p-8 rounded-2xl shadow-lg    '>
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

            </div>
        </div>
    )
}

export default Experience