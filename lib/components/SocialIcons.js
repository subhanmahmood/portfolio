import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { FaTiktok, FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';


export default function SocialIcons({containerClasses, iconColor, hoverIconColor}) {
    const iconClasses = cn('h-7 cursor-pointer', iconColor, `hover:${hoverIconColor}`)
    return (
        <div className={cn("md:flex flex-row items-center space-x-12", containerClasses)}>
            <Link href="https://twitter.com/subhanmahmoood" target="none">
                <FaTwitter className={iconClasses} />
            </Link>
            <Link href="https://instagram.com/subhan.mahmoood" target="none">
                <FaInstagram className={iconClasses} />
            </Link>
            <Link href="https://linkedin.com/in/subhanmahmood" target="none">
                <FaLinkedinIn className={iconClasses} />
            </Link>
            <Link href="https://www.tiktok.com/@subhan.mahmood?" target="none">
                <FaTiktok className={iconClasses} />
            </Link>
            <Link href="https://github.com/subhanmahmood" target="none">
                <FaGithub className={iconClasses} />
            </Link>
        </div>
    )
}
