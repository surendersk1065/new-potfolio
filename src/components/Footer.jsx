import React from 'react'

const Footer = () => {
    const date = new Date()
  return (
    <div className='bg-[#5540AF] text-center font-medium flex flex-col gap-3 p-8 text-white'>
        <p className=''>Surender.S</p>
        <p>Developed using React.js Vite and Tailwind CSS</p>
        <p>&copy; {date.getFullYear()} All Rights Reserved.</p>
    </div>
  )
}

export default Footer