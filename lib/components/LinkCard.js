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
                    <p className="text-neutral-500 text-sm mt-1">{data.number_of_link_clicks} clicks</p>
                </div>
                <button
                    onClick={() => deleteLink(data)}
                    className=" text-red-500 rounded px-4"><XIcon className="h-5" /></button>
            </div>
        )
    }

    return (
        <a onClick={handleClick} href={data.url} target="none" className="p-4 rounded-md border border-neutral-200 shadow-md flex justify-between bg-white">
            <p>{data.name}</p>
        </a>
    )
}
