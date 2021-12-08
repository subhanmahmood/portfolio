import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import AnimatedSection from './AnimatedSection';


export default function ServiceItem({ i }) {

    const boxVariants = {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.4 + 0.1 * i % 2
            }
        }
    }


    return (
        <AnimatedSection variants={boxVariants}>
            <div className="flex flex-row items-start space-x-4 group">
                <img className="group-hover:bg-white group-hover:shadow-md px-4 py-5 max-h-min transition-all flex flex-col items-center justify-center rounded-xl border border-gray-300" src="/icons/airplay.svg" />

                <div className="flex flex-col">
                    <h3 className="font-medium text-2xl">Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec viverra sapien, nunc magna a nulla sagittis amet.</p>
                </div>
            </div>
        </AnimatedSection>
    )
}
