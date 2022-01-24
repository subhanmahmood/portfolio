import React, { useState } from 'react'
import { useForm } from 'lib/hooks/useForm'
import { PlusIcon } from '@heroicons/react/outline'
import OutsideClickWrapper from 'lib/components/OutsideClickWrapper'
import EditableTextField from 'lib/components/EditableTextField'


export default function AddLinkForm({onSubmit}) {
    const [values, handleChange, resetForm] = useForm({ name: '', url: '' })
    const [adding, setAdding] = useState(false)

    const onOutsideClick = () => {
        resetForm()
        setAdding(false)
    }

    return (
        <OutsideClickWrapper onOutsideClick={onOutsideClick}>
            {
                adding ?
                    (
                        <div className="p-4 rounded-md border border-stone-200 shadow-md flex flex-row justify-between mt-4">
                            <div className="flex flex-col">
                            <EditableTextField
                                value={values.name}
                                name="name"
                                placeholder="Name"
                                onChange={handleChange} />
                            <EditableTextField
                                value={values.url}
                                name="url"
                                placeholder="URL"
                                onChange={handleChange} />
                                </div>
                            <button
                                onClick={() => {
                                    onSubmit(values)
                                    setAdding(false)
                                }} 
                                className="bg-black text-white rounded shadow px-8">Add</button>
                        </div>
                    ) : (
                        <div onClick={() => setAdding(true)} className="mt-4 h-16 rounded-md border text-stone-200 border-stone-200 flex justify-center items-center cursor-pointer">
                            <PlusIcon className="h-6" />
                        </div>
                    )
            }
        </OutsideClickWrapper>
    )
}
