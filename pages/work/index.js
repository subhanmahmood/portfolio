import React from 'react'
import WorkCard from 'lib/components/WorkCard'
import * as Prismic from '@prismicio/client'
import Client from 'utils/prismicHelpers'
import MainLayout from '../../lib/components/MainLayout'

export default function index(props) {
    return (
        <MainLayout>
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="py-24">
                    <h1 className="font-bold text-center text-6xl text-neutral-800">My Work and Projects</h1>
                    <p className="text-neutral-600 text-center text-xl">View all of my work and projects</p>
                </div>
                <div className="flex flex-col space-y-16 md:space-y-36 max-w-screen-lg mx-auto pb-36">
                    {props.workItems.map((work, i) => {
                        console.log(work)
                        return (
                            <WorkCard work={work} key={i} idx={i} />
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    )
}


export async function getStaticProps() {

    const work = await Client.get({
        predicates: [
            Prismic.predicate.at("document.type", "work")
        ]
    })

    const workItems = work.results

    return {
        props: { workItems }
    }
}