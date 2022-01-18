import React, { useState, useRef, useEffect } from 'react'
import OutsideClickWrapper from 'lib/components/OutsideClickWrapper'

export default function EditableTextField({ value, name, placeholder, onChange }) {
    const [isEditing, setIsEditing] = useState(value === '')
    const valueRef = useRef()
    const inputRef = useRef(null)

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus()
        }
    }, [isEditing])

    useEffect(() => {
        valueRef.current = value
    }, [value])


    const onOutsideClick = () => {
        // if (value === "") {
        //     console.log('value not empty')
        //     console.log(value)
        //     setIsEditing(false)
        // } else {
        //     console.log('here')
        //     setIsEditing(true)
        // }
        console.log(valueRef.current)
        if (valueRef.current === '') {
            console.log('empty')
        } else {
            console.log(value)
            setIsEditing(false)
        }
    }

    return (
        <>
            {
                isEditing ?
                    (
                        <OutsideClickWrapper onOutsideClick={onOutsideClick}>
                            <input
                                ref={inputRef}
                                value={value}
                                onChange={onChange}
                                name={name}
                                className="placeholder-neutral-400 focus:outline-0"
                                placeholder={placeholder} />
                        </OutsideClickWrapper>
                    )
                    :
                    (
                        <p onClick={() => {
                            setIsEditing(true)
                        }}>{value}</p>
                    )
            }

        </>
    )
}
