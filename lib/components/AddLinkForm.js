import React from 'react'
import { useForm } from 'lib/hooks/useForm'
import { PlusIcon } from '@heroicons/react/outline'

import EditableTextField from 'lib/components/EditableTextField'


export default function AddLinkForm() {
    const [values, handleChange, resetForm] = useForm({ name: 'subhan', url: 'google.com' })

    return (
        <div>
            <div className="h-16 rounded-md border text-neutral-200 border-neutral-200 flex justify-center items-center cursor-pointer">
                <PlusIcon className="h-6" />
            </div>
            <div className="p-4 rounded-md border border-neutral-200 shadow-md flex flex-col mt-4">
                <EditableTextField 
                    value={values.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}/>
                <EditableTextField 
                    value={values.url}
                    name="url"
                    placeholder="URL"
                    onChange={handleChange}/>

            </div>
        </div>
    )
}
