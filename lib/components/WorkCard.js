import React from 'react'
import AnimatedSection from './AnimatedSection'

export default function WorkCard({ pills }) {
    const variants = {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            }
        }
    }

    return (
        <AnimatedSection variants={variants}>
            <div className="flex flex-col gap-y-2 group transition-all">
                <img src="/icons/workitem.png" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-y-1">

                        <h4 className="font-medium text-2xl">Lorem Ipsum</h4>
                        <p className="text-gray-600">Lorem Ipsum dolor sit amet</p>
                    </div>
                    <img className="transition-transform transform group-hover:-rotate-45" src="/icons/arrow.svg" />
                </div>
                {pills &&
                    <div className="flex flex-row space-x-2 text-xs">
                        <span className="px-3 py-2 text-white bg-gray-500 rounded-full">Figma</span>
                        <span className="px-3 py-2 text-white bg-gray-500 rounded-full">Webflow</span>
                    </div>}
            </div>
        </AnimatedSection>
    )
}
