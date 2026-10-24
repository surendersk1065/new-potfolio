import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dots, setDots] = useState(1);

  // Animate the logo dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((previous) => (previous % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* BACKGROUND BLUR */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="relative z-50 text-white">
        <div className="p-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between">

            {/* LOGO */}
            <h1 className="text-3xl font-extrabold">
              Surender S
              <span className="text-purple-400">
                {".".repeat(dots)}
              </span>
            </h1>

            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-8 text-lg lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-purple-400"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-full border border-white/20 p-2 text-3xl transition-colors hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IoCloseSharp /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 right-4 top-full rounded-2xl border border-white/10 bg-[#201936] p-5 shadow-xl lg:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.2,
                  }}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-lg transition-colors last:border-0 hover:text-purple-400"
                >
                  {link.name}
                  <span className="text-purple-400">↗</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;