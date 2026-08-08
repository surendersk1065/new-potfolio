import React from 'react'

const Projects = () => {
    const project = [
        {
            id:1,
            Name:"  ",
            type:"Full Stack",
            descp:"Built a full-stack Fitness Studio web application with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and the Resend API, providing a responsive frontend, robust backend, database integration, and seamless email functionality.",
            cont:["Responsive User Interface","Authentication & User Management","Fitness Programs & Services","Contact Form with Resend API","MongoDB Data Management"],
            tech:["Reacts.js","Tailwind CSS","Node.js","Express.js","MongoDB","Resend API"],
            link:"https://fitness-studio-frontend-beta.vercel.app/"
        },
        {
            id:2,
            Name:"Insta login Page Replica",
            type:"Full stack",
            descp:"Built a full-stack Instagram login page clone with React.js, Tailwind CSS, Node.js, and Express.js, featuring client-side validation, backend mock authentication, Axios-based API communication, and successful login redirection.",
            cont:["Responsive User Interface","Tailwind CSS Styling","Express.js Backend","API Integration with Axios","Error Handling"],
            tech:["Reacts.js","Tailwind CSS","Node.js","Express.js","Axios"],
            link:"https://express-login-one.vercel.app/"
        },
        {
            id:3,
            Name:"To do App",
            type:"Front End and Authentication",
            descp:"Developed a responsive Todo application using React.js, and Tailwind CSS, implementing user authentication, React Router navigation, task management, form validation, and state management with React Hooks.",
            cont:["Responsive User Interface","Tailwind CSS Styling","React Router Navigation","Sign Up & Login Flow"],
            tech:["Reacts.js","Tailwind CSS","state Management","Creation and deletion"],
            link:"https://todo-react-ruby-eight.vercel.app/"
        },
        {
            id:4,
            Name:"React To do App",
            type:"Front End",
            descp:"Developed a dynamic To-Do application using React.js and Bootstrap 5 with CRUD functionality and integrated a custom JSON Server API for efficient task management and dynamic data handling.",
            cont:["Responsive User Interface","Bootstrap 5 Responsive UI","CRUD Operations","State Management with React Hooks","Task Creation & Deletion"],
            tech:["Reacts.js","Bootstrap 5"],
            link:"https://react-task-app-todo.netlify.app/"
        },
    ]
  return (
        <div className='md:px-38 px-8 min-h-screen py-24' id='projects'>
            <h1 className='font-extrabold text-3xl text-[#5540AF] mb-8'>Projects</h1>

            <div className="projects lg:grid grid-cols-2 gap-3 font-bold">
                {project.map((items) => {
                    return (
                        <div className='bg-[#F4F3F8] p-8 rounded-2xl shadow-lg mb-2 hover:-translate-y-2 transition-all duration-300'>
                            <div className='flex justify-between mb-3'>
                                <p>0{items.id}</p>
                                <p>{items.type}</p>
                            </div>

                            <div>
                                <p className='text-2xl font-extrabold text-[#5540AF] mb-3'>{items.Name}</p>
                                <p className='mb-3'>{items.descp}</p>
                            </div>

                            <div>
                                <p className='text-xl font-extrabold text-[#5540AF] mb-2'>My Contribution</p>
                                <ul className='mb-5'>
                                    {items.cont.map((val) =>{
                                        return (
                                            <li className='mb-2 list-disc ms-10'>{val}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <p className='text-lg font-bold bg-[#5540AF] inline-block text-white p-3 rounded-xl hover:bg-transparent hover:text-black transition-all duration-300'><a href={items.link} target='_blank'>Project Link</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default Projects