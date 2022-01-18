import React, { useEffect, useRef } from 'react'
import { useForm } from 'lib/hooks/useForm'
import { XIcon } from '@heroicons/react/outline'
import EditableTextField from 'lib/components/EditableTextField'


export default function LinkCard({ data, updateLink, deleteLink }) {
    const [values, handleChange, resetForm] = useForm(data)
    const valuesRef = useRef()

    useEffect(() => {
        valuesRef.current = values
    }, [values])

    return (
        <div className="p-4 rounded-md border border-neutral-200 shadow-md flex justify-between bg-white">
            <div className="flex flex-col">
                <EditableTextField
                    value={values.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    callback={() => updateLink(valuesRef.current, true)} />
                <EditableTextField
                    value={values.url}
                    name="url"
                    placeholder="URL"
                    onChange={handleChange}
                    callback={() => updateLink(valuesRef.current, true)} />
            </div>
            <button
                onClick={() => deleteLink(data)}
                className="bg-red-500 text-white rounded shadow px-4"><XIcon className="h-5" /></button>
        </div>
    )
}
