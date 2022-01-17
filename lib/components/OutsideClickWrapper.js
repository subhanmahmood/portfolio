import React, { useRef, useEffect } from 'react'

export default function OutsideClickWrapper({ children, onOutsideClick }) {
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
        <div ref={wrapperRef}>
            {children}
        </div>
    )
}
