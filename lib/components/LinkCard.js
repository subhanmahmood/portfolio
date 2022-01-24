import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useForm } from 'lib/hooks/useForm'
import { XIcon } from '@heroicons/react/outline'
import { useAuth } from 'lib/contexts/AuthContext'
import EditableTextField from 'lib/components/EditableTextField'

export default function LinkCard({ data, updateLink, deleteLink }) {
    const [values, handleChange, resetForm] = useForm(data)
    const { currentUser } = useAuth()
    const valuesRef = useRef()

    useEffect(() => {
        valuesRef.current = values
    }, [values])

    const handleClick = async () => {
        try {
            const res = await axios.post(`/api/links/${data.id}`)
        } catch (err) {
            console.log(err)
        }
    }


    if (currentUser) {
        return (
            <div className="p-4 rounded-md border border-stone-200 shadow-md flex justify-between bg-white">
                <div className="flex flex-col flex-1">
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
                        textClassNames="text-stone-500"
                        callback={() => updateLink(valuesRef.current, true)} />
                    <p className="text-stone-500 text-sm mt-1">{data.number_of_link_clicks} clicks</p>
                    <button
                        onClick={() => deleteLink(data)}
                        className="transition-all text-red-500 border border-red-300 hover:text-white hover:bg-red-500 rounded px-4 flex justify-center items-center py-2 mt-2 space-x-2"><span>DELETE</span> <XIcon className="h-5" /></button>
                </div>
            </div>
        )
    }

    return (
        <a
            onClick={handleClick}
            href={data.url}
            target="none"
            className="transition-all hover:shadow-lg p-6 text-xl font-medium rounded-md border border-stone-200 shadow-md flex justify-between bg-white">
            <p>{data.name}</p>
        </a>
    )
}
