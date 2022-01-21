import React from 'react'
import Footer from '../../lib/components/Footer'
import Navbar from '../../lib/components/Navbar'
import MainLayout from '../../lib/components/MainLayout'
import { fetchBlogPosts } from '../../utils/queries'
import Client from '../../utils/prismicHelpers'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../prismicConfiguration'
import { htmlSerializer } from '../../utils/htmlSerializer'

export default function index(props) {
    const blogPostData = props.blogPost.data
    const headings = blogPostData.content.filter((item) => item.type === 'heading2')

    return (
        <MainLayout>
            <div className="container mx-auto">
                <div className="px-5 md:w-8/12 mx-auto">
                    <div className="flex flex-col items-center justify-center pt-32 md:pt-48 space-y-4 md:space-y-12">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-extrabold text-2xl md:text-6xl text-center leading-tight">{blogPostData.title[0].text}</h1>
                            <h2 className="font-medium text-lg md:text-3xl text-center text-gray-500">{blogPostData.subtitle[0].text}</h2>
                        </div>
                        <div className="flex flex-row space-x-4 items-center">
                            <img src={props.author.data.image.url} className="rounded-full h-6 w-6 md:h-12 md:w-12" />
                            <p className="text-gray-700">by <b>{props.author.data.name}</b></p>
                        </div>
                        <div style={{backgroundImage: `url(${blogPostData.cover_image.url})`}} className="w-full h-64 md:h-96 bg-cover rounded-xl overflow-hidden py-16"></div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto py-12">
                <div className="px-4 md:w-8/12 lg:w-6/12 mx-auto">
                    <div className="flex flex-col text-lg text-gray-700 pb-8">
                        {
                            headings.map((heading, i) => {
                                console.log(heading)
                                return (
                                    <a href={`#${heading.text}`} key={`toc-${i}`} className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">{heading.text}</a>
                                )
                            })
                        }
                    </div>
                    <article className="prose lg:prose-xl">
                        <RichText render={blogPostData.content} htmlSerializer={htmlSerializer} />
                    </article>
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
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {
    console.log(params)
    const { uid } = params
    const blogPost = await Client().getByUID(
        'blog',
        uid
    )

    const author = await Client().getByID(blogPost.data.author.id)

    return {
        props: { uid, blogPost, author }
    }
}

export async function getStaticPaths() {
    const posts = await fetchBlogPosts()
    const paths = posts.results.map((blog) => {
        return {
            params: {
                uid: blog.uid
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}