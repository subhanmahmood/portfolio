import React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router'
import cn from 'classnames'

function NavButton({ router, icon, link, text }) {
    const active = router.pathname === link
    return (
        <Link href={link} >
            <div className="cursor-pointer flex flex-col items-center justify-end md:justify-center space-y-1 h-full">
                {icon}
                <p className="text-xs md:text-sm hover:text-gray-500">{text}</p>
                <div className={cn("md:hidden justify-self-end h-1 rounded-t-md w-full", {
                    "bg-gray-700 ": active
                })}></div>
            </div>
        </Link>
    )
}

export default withRouter(NavButton)
