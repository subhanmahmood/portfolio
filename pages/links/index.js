import React from 'react'
import Footer from '../../lib/components/Footer'
import Navbar from '../../lib/components/Navbar'

export default function index() {
    return (
        <MainLayout>
            <div className="container mx-auto">
                <div className="w-8/12 mx-auto">
                    <div className="flex flex-col items-center justify-center pt-48 space-y-12">
                        <div className="flex flex-col space-y-4">
                            <h1 className="font-extrabold text-6xl text-center leading-tight">Hi, if you're here from TikTok or Instagram, you'll probably find what you're looking for here</h1>
                            <h2 className="font-medium text-3xl text-center text-gray-500">If not, drop me a message on Instagram and I'll do my best</h2>
                        </div>
                        <div className="flex flex-row space-x-4 items-center">
                            <img src="/profile.jpg" className="rounded-full h-12 w-12" />
                            <p className="text-gray-700">by <b>Subhan Mahmood</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container mx-auto py-24">
                <div className="w-4/12 mx-auto flex flex-col space-y-8">
                    <div className="flex flex-row py-7 items-center rounded-2xl border-gray-200 border transition-all hover:shadow-md">
                        <div className="mx-7">
                            <img src="/icons/airplay.svg" />
                        </div>
                        <p className="text-2xl font-medium">Setup Links</p>
                    </div>
                    <div className="flex flex-row py-7 items-center rounded-2xl border-gray-200 border transition-all hover:shadow-md">
                        <div className="mx-7">
                            <img src="/icons/airplay.svg" />
                        </div>
                        <p className="text-2xl font-medium">Setup Links</p>
                    </div>
                    <div className="flex flex-row py-7 items-center rounded-2xl border-gray-200 border transition-all hover:shadow-md">
                        <div className="mx-7">
                            <img src="/icons/airplay.svg" />
                        </div>
                        <p className="text-2xl font-medium">Setup Links</p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-24">
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
