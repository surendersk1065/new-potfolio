import React from 'react'
import { motion, useScroll, useTransform } from "motion/react"
import bg from '../assets/bg.png'
import Nav from '../common/Nav'
import Hometext from './Hometext'

const HomeContainer = () => {

    const { scrollY } = useScroll()
    const bgY = useTransform(scrollY, [0, 600], [0, 180])
    const scale = useTransform(scrollY, [0, 600], [1.3, 1.2])

    return (
        <section className="relative  overflow-hidden h-screen text-white">
            <motion.div
                style={{
                    y: bgY,
                    scale: scale,
                }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={bg}
                    alt="Webzpot Studio"
                    className="h-full w-full object-cover"
                />
            </motion.div>

            {/* DARK OVERLAY */}
            <div
            className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/35 to-black/25"/>

            <div className="relative z-50">
                <Nav />
                <Hometext />
            </div>


        </section>
    )
}

export default HomeContainer