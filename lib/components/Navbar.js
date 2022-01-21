import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HomeIcon, ExternalLinkIcon, MenuIcon, BookOpenIcon, XIcon } from '@heroicons/react/outline'
import NavButton from './NavButton'
import { useAuth } from 'lib/contexts/AuthContext'
import { useRouter } from 'next/router'
import { FaTiktok, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

import Link from 'next/link'

export default function Navbar() {
    const { currentUser, logout } = useAuth()
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const IconClasses = "h-7 md:hidden"

    const logoutAndRedirect = async () => {
        try {
            logout()
            router.push('/auth/login')
        } catch (err) {
            console.log(err)
        }
    }

    const NavItems = [
        {
            href: '/',
            icon: <HomeIcon className={IconClasses} />,
            text: 'Home'
        },
        {
            href: '/work',
            icon: <BookOpenIcon className={IconClasses} />,
            text: 'Work'
        },
        {
            href: '/Links',
            icon: <ExternalLinkIcon className={IconClasses} />,
            text: 'Links'
        }
    ]

    return (
        <nav className="z-40 w-full fixed md:relative top-0 md:bottom-auto inset-x-0 md:inset-x-auto">
            <div className="container mx-auto">
                <div className="md:max-w-screen-xl px-4 py-6 md:p-0 flex flex-row items-center justify-between mx-auto">
                    <div className="hidden md:flex flex-row items-center space-x-12">
                        <Link href="https://twitter.com/subhanmahmoood" target="none">
                            <FaTwitter className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                        </Link>
                        <Link href="https://instagram.com/subhan.mahmoood" target="none">
                            <FaInstagram className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                        </Link>
                        <Link href="https://linkedin.com/in/subhanmahmood" target="none">
                            <FaLinkedinIn className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                        </Link>
                        <Link href="https://tiktok.com/subhan.mahmood" target="none">
                            <FaTiktok className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                        </Link>
                    </div>
                    <div className="relative bg-white h-16 md:h-auto md:bg-transparent shadow-md md:shadow-none w-full md:max-w-max flex flex-row items-center justify-around md:justify-items-start md:space-x-12 rounded-lg md:py-4 border border-gray-200 md:border-none font-medium text-gray-900">

                        {
                            NavItems.map((button, i) => {
                                return <NavButton key={i} icon={button.icon} link={button.href} text={button.text} />
                            })
                        }
                        <div className="hidden md:block">
                            {currentUser && <button onClick={() => logoutAndRedirect()} className="px-4 py-2 rounded border border-neutral-200">Logout</button>}
                        </div>


                        <div className="flex md:hidden flex-col items-center justify-end md:justify-center space-y-1 h-full" onClick={() => setOpen(!open)}>
                            {
                                open ?
                                    <XIcon className={IconClasses} />
                                    :
                                    <MenuIcon className={IconClasses} />
                            }
                            <a className="transition-all text-xs md:text-sm hover:text-gray-500">{open ? 'Close' : 'Menu'}</a>
                            <div className="md:hidden justify-self-end h-1 rounded-t-md bg-white w-full"></div>
                        </div>
                        <AnimatePresence>
                            {open &&
                                <motion.div
                                    key="navDrawer"
                                    className="border border-gray-200 transition absolute bg-white w-full md:hidden shadow-lg rounded-lg mt-64 p-4"
                                    initial={{ opacity: 0, y: -30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 30 }}
                                >
                                    <ul className="flex flex-col gap-2 ml-0">
                                        <a href="#work" className="transition hover:text-gray-400 text-base text-gray-700 font-display font-medium">Work</a>
                                        <a href="mailto:contact@subhan.io" className="transition hover:text-gray-400 text-base text-gray-700 font-display font-medium">Contact</a>
                                        <div className="flex md:hidden">
                                            {currentUser && <button onClick={() => logoutAndRedirect()} className="px-4 py-2 rounded border border-neutral-200">Logout</button>}
                                        </div>
                                    </ul>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </nav>
    )
}
