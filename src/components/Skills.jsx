import React from 'react'

const Skills = () => {
    const skills = [
        {
            id:1,
            name:"Frontend",
            skill:["HTML","CSS","Bootstrap","Tailwind css","SCSS","SASS","JavaScript"]
        },
        {
            id:2,
            name:"Backend",
            skill:["Node.js","Express.js"]
        },
        {
            id:3,
            name:"DataBase",
            skill:["MongoDB","SQL"]
        },
        {
            id:4,
            name:"API",
            skill:["REST APIs","JSON","Axios"]
        },
        {
            id:5,
            name:"Tools",
            skill:["Git","GitHub","VS code","Postman"]
        },
        {
            id:6,
            name:"Programming Language and others",
            skill:["Java","C","PowerBI","Excel"]
        }
    ]
  return (
        <div className='md:px-38 px-8 min-h-screen py-24' id='skills'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Technical Skills</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2   gap-3 font-bold">
                {
                    skills.map((items) => {
                        return (
                            <div className='bg-[#F4F3F8] p-8 rounded-2xl shadow-lg mb-2 hover:-translate-y-2 transition-all duration-300'>
                                <p className='text-xl font-extraboldbold mb-5'>{items.name}</p>

                                <div>
                                    <ul className='flex flex-wrap gap-3'>
                                        {items.skill.map((val) => {
                                            return (
                                                <li className='bg-[#5540AF] text-white p-3 rounded-lg font-light w-36'>{val}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Skills