import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useForm } from 'lib/hooks/useForm'
import { XIcon } from '@heroicons/react/outline'
import { useAuth } from 'lib/contexts/AuthContext'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/outline'
import EditableTextField from 'lib/components/EditableTextField'

export default function LinkCard({ data, updateLink, deleteLink }) {
    const router = useRouter()
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
            <div className="p-4 rounded-md border border-stone-200 shadow-md flex flex-col md:flex-row justify-between bg-white">
                <div className="flex flex-col flex-1" style={{ minWidth: 0 }}>
                    <EditableTextField
                        value={values.name}
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        inputClassNames="w-full"
                        callback={() => updateLink(valuesRef.current, true)} />
                    <EditableTextField
                        value={values.url}
                        name="url"
                        placeholder="URL"
                        onChange={handleChange}
                        textClassNames="text-stone-500"
                        inputClassNames="w-full"
                        callback={() => updateLink(valuesRef.current, true)} />
                    {
                        data.percentChange > 0 ? (
                            <div className="text-sm mt-1 text-emerald-300 flex items-center">
                                <TrendingUpIcon className="h-4 mr-1" />
                                <span>{data.percentChange}%</span>
                                <span className="text-stone-300 ml-2">{' (24hrs)'}</span>
                            </div>
                        ) : (
                            <div className="text-sm mt-1 text-red-300 flex items-center">
                                <TrendingDownIcon className="h-4 mr-1" />
                                <span>{data.percentChange}%</span>
                                <span className="text-stone-300 ml-2">{' (24hrs)'}</span>
                            </div>
                        )
                    }
                </div>
                <button
                    onClick={() => deleteLink(data)}
                    className="transition-all text-red-500 border border-red-300 md:border-0 hover:text-white hover:bg-red-500 rounded px-4 flex justify-center items-center py-2 mt-2 space-x-2 md:space-x-0">
                    <span className="md:hidden">DELETE</span> 
                    <XIcon className="h-5" />
                </button>
            </div>
        )
    }

    return (
        <a
            onClick={handleClick}
            href={data.url}
            className="transition-all hover:shadow-lg p-6 text-xl font-medium rounded-md border border-stone-200 shadow-md flex justify-between bg-white">
            <p>{data.name}</p>
        </a>
    )
}
