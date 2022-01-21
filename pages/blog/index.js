import React from 'react'
import Footer from '../../lib/components/Footer'
import Navbar from '../../lib/components/Navbar'
import BlogCard from '../../lib/components/BlogCard'
import Client from 'utils/prismicHelpers'
import * as Prismic from '@prismicio/client'

export default function index(props) {
    console.log(props)
    return (
        <div className="font-display">
            <Navbar />
            <section className="container mx-auto py-32 md:py-24">
                <div className="px-4 md:w-8/12 xl:w-4/12 mx-auto">
                    <h1 className="font-semibold text-5xl">Latest Blog Posts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 py-12">
                        {props.blogPosts.map((blogPost, i) => {
                            return <BlogCard blogPost={blogPost} />
                        })}
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12 md:py-24">
                <div className="max-w-max mx-auto">
                    <div className="rounded-2xl  p-8 flex flex-col items-center">
                        <h2 className="font-bold text-5xl">Get the top secret stuff</h2>
                        <p className="text-gray-500 mt-4">I won't spam you, I promise :)</p>
                        <div className="flex flex-row space-x-4 mt-6">
                            <input className="py-y px-6 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email..." />
                            <button className="px-6 py-4 max-w-max rounded-md bg-black text-white font-semibold ">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const posts = await Client.get({
        predicates: [
            Prismic.predicate.at("document.type", "blog")
        ]
    })
    const blogPosts = posts.results
    return {
        props: { blogPosts }
    }
}