import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const project = [
    {
      id: 1,
      Name: "Fitness Studio",
      type: "Full Stack",
      descp:
        "Built a full-stack Fitness Studio web application with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and the Resend API, providing a responsive frontend, robust backend, database integration, and seamless email functionality.",
      cont: [
        "Responsive User Interface",
        "Authentication & User Management",
        "Fitness Programs & Services",
        "Contact Form with Resend API",
        "MongoDB Data Management",
      ],
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Resend API",
      ],
      link: "https://fitness-studio-frontend-beta.vercel.app/",
    },
    {
      id: 2,
      Name: "Insta Login Page Replica",
      type: "Full Stack",
      descp:
        "Built a full-stack Instagram login page clone with React.js, Tailwind CSS, Node.js, and Express.js, featuring client-side validation, backend mock authentication, Axios-based API communication, and successful login redirection.",
      cont: [
        "Responsive User Interface",
        "Tailwind CSS Styling",
        "Express.js Backend",
        "API Integration with Axios",
        "Error Handling",
      ],
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "Axios",
      ],
      link: "https://express-login-one.vercel.app/",
    },
    {
      id: 3,
      Name: "To-Do App",
      type: "Frontend & Authentication",
      descp:
        "Developed a responsive Todo application using React.js and Tailwind CSS, implementing user authentication, React Router navigation, task management, form validation, and state management with React Hooks.",
      cont: [
        "Responsive User Interface",
        "Tailwind CSS Styling",
        "React Router Navigation",
        "Sign Up & Login Flow",
      ],
      tech: [
        "React.js",
        "Tailwind CSS",
        "State Management",
        "Task Creation & Deletion",
      ],
      link: "https://todo-react-ruby-eight.vercel.app/",
    },
    {
      id: 4,
      Name: "React To-Do App",
      type: "Frontend",
      descp:
        "Developed a dynamic To-Do application using React.js and Bootstrap 5 with CRUD functionality and integrated a custom JSON Server API for efficient task management and dynamic data handling.",
      cont: [
        "Responsive User Interface",
        "Bootstrap 5 Responsive UI",
        "CRUD Operations",
        "State Management with React Hooks",
        "Task Creation & Deletion",
      ],
      tech: ["React.js", "Bootstrap 5", "JSON Server"],
      link: "https://react-task-app-todo.netlify.app/",
    },
  ];

  // Animation for the complete projects section
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual project cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="md:px-38 px-8 min-h-screen py-24"
      id="projects"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >

        <h1 className="font-extrabold text-3xl text-[#5540AF]">
          Projects<span className="text-gray-400">.</span>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 65 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-1 bg-[#5540AF] rounded-full mt-3"
        />
      </motion.div>

      {/* Project cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5"
      >
        {project.map((items) => (
          <motion.article
            key={items.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.25 },
            }}
            className="group relative flex flex-col overflow-hidden bg-[#F4F3F8] p-6 md:p-8 rounded-2xl border border-transparent hover:border-[#5540AF]/30 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Decorative top line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: items.id * 0.12,
              }}
              className="absolute top-0 left-0 w-full h-1 bg-[#5540AF] origin-left"
            />

            {/* Card header */}
            <div className="flex justify-between items-center gap-3 mb-5">
              <span className="text-sm font-extrabold text-[#5540AF] tracking-widest">
                {String(items.id).padStart(2, "0")}
              </span>

              <span className="text-xs sm:text-sm font-semibold text-[#5540AF] bg-white px-3 py-1.5 rounded-full">
                {items.type}
              </span>
            </div>

            {/* Project details */}
            <h2 className="text-2xl font-extrabold text-[#5540AF] mb-3 group-hover:text-[#725CE0] transition-colors duration-300">
              {items.Name}
            </h2>

            <p className="text-gray-700 font-normal leading-7 mb-6">
              {items.descp}
            </p>

            {/* Contributions */}
            <div className="mb-6">
              <h3 className="text-lg font-extrabold text-[#5540AF] mb-3">
                My Contribution
              </h3>

              <ul className="space-y-2">
                {items.cont.map((val, index) => (
                  <motion.li
                    key={val}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.07,
                    }}
                    className="flex items-start gap-3 text-gray-700 font-medium"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#5540AF] shrink-0" />
                    <span>{val}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 mb-7">
              {items.tech.map((technology) => (
                <span
                  key={technology}
                  className="text-xs font-semibold text-[#5540AF] bg-white border border-[#5540AF]/10 px-3 py-2 rounded-lg"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Project link */}
            <div className="mt-auto">
              <motion.a
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#5540AF] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#42308F] transition-colors duration-300"
              >
                View Project
                <ExternalLink size={17} />
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;