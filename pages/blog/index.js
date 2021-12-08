import React from 'react'
import Footer from '../../lib/components/Footer'
import Navbar from '../../lib/components/Navbar'

export default function index() {
    return (
        <div className="font-display">
            <Navbar />
            <div className="container mx-auto">
                <div className="px-5 md:w-8/12 mx-auto">
                    <div className="flex flex-col items-center justify-center pt-32 md:pt-48 space-y-4 md:space-y-12">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-extrabold text-2xl md:text-6xl text-center leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                            <h2 className="font-medium text-lg md:text-3xl text-center text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        </div>
                        <div className="flex flex-row space-x-4 items-center">
                            <img src="/profile.jpg" className="rounded-full h-6 w-6 md:h-12 md:w-12" />
                            <p className="text-gray-700">by <b>Subhan Mahmood</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto py-24">
                <div className="px-4 md:w-4/12 mx-auto">
                    <div className="flex flex-col text-lg text-gray-700 pb-8">
                        <a className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">My setup</a>
                        <a className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">My setup</a>
                        <a className="px-3 py-2 border-l-4 border-gray-400 text-black">My setup</a>
                        <a className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">My setup</a>
                        <a className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">My setup</a>
                        <a className="px-3 py-2 border-l-4 border-gray-200 hover:border-gray-300">My setup</a>
                    </div>
                    <article className="prose lg:prose-xl">
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui mi dui ut fusce placerat mi tellus neque. Mi massa hendrerit sed id elit ut amet. Vitae lectus amet, a vitae iaculis volutpat dolor sem sed. Nulla massa in pharetra phasellus laoreet ullamcorper quis. Id tempus nam nisl euismod leo arcu senectus. Quis habitant eros vulputate platea aenean ac. Quam sed at lorem potenti. Morbi elit posuere accumsan neque cras facilisis. Scelerisque odio vel sit sapien. In sed aliquet aliquam sapien, tincidunt viverra viverra mi. Et, ac elit proin sit molestie euismod. Condimentum sed vitae tortor ut. Interdum purus imperdiet erat commodo. Orci, quis tempus mauris cum fermentum, natoque.</p>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
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
            <Footer />
        </div>
    )
}
