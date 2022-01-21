import React from 'react'
import Link from 'next/link'
import { FaTiktok, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white w-full py-12 md:py-32">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col items-end w-full space-y-16">
                    <div className="flex flex-row space-x-16 w-full">
                        <div className="flex flex-col space-y-4">
                            <p className="font-semibold text-xl">General</p>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                            <Link href="/work">
                                <a>My Work</a>
                            </Link>
                            <Link href="https://prismic-io.s3.amazonaws.com/subhan/b6261e48-67fe-4032-9853-d0f47e422883_Subhan+Mahmood+CV.pdf">
                                <a>Resume</a>
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <p className="font-semibold text-xl">Other</p>
                            <a>Tools</a>
                            <Link href="/links">
                                <a>Links</a>
                            </Link>
                            <Link href="/notion">
                                <a>Notion Templates</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between w-full">
                        <p>Made by Subhan Mahmood</p>
                        <div className="hidden md:flex flex-row items-center space-x-12">
                            <Link href="https://twitter.com/subhanmahmoood" target="none">
                                <FaTwitter className="text-white hover:text-neutral-400 h-7 cursor-pointer" />
                            </Link>
                            <Link href="https://instagram.com/subhan.mahmoood" target="none">
                                <FaInstagram className="text-white hover:text-neutral-400 h-7 cursor-pointer" />
                            </Link>
                            <Link href="https://linkedin.com/in/subhanmahmood" target="none">
                                <FaLinkedinIn className="text-white hover:text-neutral-400 h-7 cursor-pointer" />
                            </Link>
                            <Link href="https://tiktok.com/subhan.mahmood" target="none">
                                <FaTiktok className="text-white hover:text-neutral-400 h-7 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
