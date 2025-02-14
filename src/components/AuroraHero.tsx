import React, { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { animate } from 'motion';

interface AuroraProps {
    children: React.ReactNode
}

const COLORS: any = ["#1E67C6", "#032d63"]
export const AuroraHero = ({children}: AuroraProps) => {
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
             repeatType: 'mirror'
        })
    }, []);

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative flex min-h-screen w-full items-stretch overflow-hidden bg-gray-950 px-4 py-4 text-gray-200"
        >{children}</motion.section>
    )
}