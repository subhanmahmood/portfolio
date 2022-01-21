import React from 'react'
import AnimatedSection from './AnimatedSection'
import {ExternalLinkIcon} from '@heroicons/react/outline'

export default function WorkCard({ work, idx }) {
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
            <div className={`project w-full ${idx % 2 === 0 ? 'left' : 'right'}`}>
                <div className="project-image h-full bg-cover " style={{ backgroundImage: `url(${work.data.cover_image.url})` }}>
                </div>
                <div className="project-content text-left">
                    <h3 className="font-semibold uppercase tracking-widest text-sm text-neutral-400">{work.data.featured ? 'Featured Project' : 'Project'}</h3>
                    <h3 className="font-semibold text-3xl mb-4">{work.data.title[0].text}</h3>
                    <p className="bg-transparent md:bg-white p-0 md:p-8 prose md:shadow-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, egestas tempor faucibus facilisi. Sit in nulla in arcu facilisi consequat. Purus laoreet ultricies amet eu laoreet sed vulputate nibh. Et gravida tellus, leo congue enim vulputate volutpat molestie.</p>
                    <div className="flex flex-row tools flex-wrap space-x-3">
                        {work.data.tools.map(({ tool }, i) => {
                            return <p className="font-code text-neutral-500">{tool}</p>
                        })}
                    </div>
                    <div className="flex links space-x-4 w-full mt-4">
                        <ExternalLinkIcon className="h-6" />
                        <ExternalLinkIcon className="h-6" />
                    </div>
                </div>
            </div>
        </AnimatedSection>
    )
}
