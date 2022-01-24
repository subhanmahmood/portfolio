import React, { useState, useRef, useEffect } from 'react'
import OutsideClickWrapper from 'lib/components/OutsideClickWrapper'
import cn from 'classnames'

export default function EditableTextField({ value, name, placeholder, onChange, callback, textClassNames, inputClassNames }) {
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
        if (valueRef.current !== '') {
            setIsEditing(false)
            if (callback) {
                callback()
            }
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
                                className={cn("placeholder-stone-400 focus:outline-0", inputClassNames)}
                                placeholder={placeholder} />
                        </OutsideClickWrapper>
                    )
                    :
                    (
                        <p
                            className={cn(textClassNames)}
                            onClick={() => {
                            setIsEditing(true)
                        }}>{value}</p>
                    )
            }

        </>
    )
}
