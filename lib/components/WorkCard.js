import React from 'react'
import AnimatedSection from './AnimatedSection'
import cn from 'classnames'
export default function WorkCard({ state }) {
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
            <a href={state.data.link.url !== undefined ? state.data.link.url : ''} target="none">
                <div className={cn("flex flex-col gap-y-2 group transition-all", { "cursor-pointer": state.data.link.url !== undefined })}>
                    <img src={state.data.cover_image.url} />
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-y-1">

                            <h4 className="font-medium text-2xl">{state.data.title[0].text}</h4>
                            <p className="text-gray-600">{state.data.subtitle[0].text}</p>
                        </div>
                        {state.data.link.url !== undefined && <img className="transition-transform transform group-hover:-rotate-45" src="/icons/arrow.svg" />}
                    </div>
                    {
                        state.data.category === 'Project' &&
                        <div className="flex flex-row space-x-2 text-xs">
                            <span className="px-3 py-2 text-white bg-gray-500 rounded-full">Figma</span>
                            <span className="px-3 py-2 text-white bg-gray-500 rounded-full">Webflow</span>
                        </div>
                    }
                </div>
            </a>
        </AnimatedSection>
    )
}
