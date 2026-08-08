import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import Home from '../components/Home';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='app h-screen' id='nav'>
            <div className=' text-white font-medium p-6'>
                <div className="navbar-container flex justify-between lg:justify-around items-center ">

                    <div className="myname">
                        <p className='text-3xl font-extrabold'>Surender S</p>
                    </div>

                    <div className="nav-links hidden lg:flex gap-10 text-lg items-center">
                        <a href='#home'>Home</a>
                        <a href='#about'>About</a>
                        <a href='#experience'>Experience</a>
                        <a href='#projects'>Projects</a>
                        <a href='#skills'>Skills</a>
                        <a href='#contact'>Contact</a>
                    </div>

                    {/* Menu Icon */}
                    <p
                        className='text-3xl lg:hidden cursor-pointer'
                        onClick={() => setMenuOpen(true)}
                    >
                        <MdMenu />
                    </p>

                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`fixed top-0 left-0 h-screen w-[50%] bg-[#5540AF] text-white font-medium p-6 flex flex-col gap-6 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Icon */}
                <p
                    className='flex justify-end text-3xl cursor-pointer'
                    onClick={() => setMenuOpen(false)}
                >
                    <IoCloseSharp />
                </p>

                        <a href='#home' onClick={() => setMenuOpen(false)}>Home</a>
                        <a href='#about' onClick={() => setMenuOpen(false)}>About</a>
                        <a href='#experience' onClick={() => setMenuOpen(false)}>Experience</a>
                        <a href='#projects' onClick={() => setMenuOpen(false)}>Projects</a>
                        <a href='#skills' onClick={() => setMenuOpen(false)}>Skills</a>
                        <a href='#contact' onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
            <Home />
        </div>
    )
}

export default Navbar;