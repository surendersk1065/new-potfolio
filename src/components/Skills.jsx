import React from 'react'
import { motion } from 'motion/react'

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "Frontend",
            skill: ["HTML", "CSS", "Bootstrap", "Tailwind css", "SCSS", "SASS", "JavaScript"]
        },
        {
            id: 2,
            name: "Backend",
            skill: ["Node.js", "Express.js"]
        },
        {
            id: 3,
            name: "DataBase",
            skill: ["MongoDB", "SQL"]
        },
        {
            id: 4,
            name: "API",
            skill: ["REST APIs", "JSON", "Axios"]
        },
        {
            id: 5,
            name: "Tools",
            skill: ["Git", "GitHub", "VS code", "Postman"]
        },
        {
            id: 6,
            name: "Programming Language and others",
            skill: ["Java", "C", "PowerBI", "Excel"]
        }
    ]

    return (
        <div
            className="md:px-38 px-6 min-h-screen py-16 md:py-24 overflow-x-hidden"
            id="skills"
        >
            <h1 className="font-extrabold text-3xl text-[#5540AF] mb-8">
                Technical Skills
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 font-bold">
                {skills.map((items, index) => (
                    <motion.div
                        key={items.id}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -40 : 40 // Adjusted mobile offset to avoid overflow
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className="bg-[#F4F3F8] p-6 md:p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300"
                    >
                        <p className="text-xl font-extrabold mb-5">
                            {items.name}
                        </p>

                        <ul className="flex flex-wrap gap-2.5">
                            {items.skill.map((val) => (
                                <li
                                    key={val}
                                    className="bg-[#5540AF] text-white py-2 px-3 text-center rounded-lg font-light flex-1 min-w-[100px] sm:w-36"
                                >
                                    {val}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills