import React, { useRef, useEffect } from 'react'
import cn from 'classnames'

export default function OutsideClickWrapper({ children, onOutsideClick, classNames }) {
    const wrapperRef = useRef(null)

    const handleClickOutside = (e) => {
        if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
            onOutsideClick()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div ref={wrapperRef} className={cn(classNames)}>
            {children}
        </div>
    )
}
