import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MainLayout from '../../lib/components/MainLayout'
import AddLinkForm from 'lib/components/AddLinkForm'


export default function index() {
    const [links, setLinks] = useState([])

    

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await axios.get('/api/link')
                setLinks(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchLinks()
    }, [])

    const addLink = async () => {
        try {
            const res = await axios.post('/api/link',
                values)

            resetForm()
            setLinks([...links, res.data[0]])
        } catch (err) {
            console.log(err)
        }
    }

    const deleteLink = async (linkId) => {
        try {
            const res = await axios.delete('/api/link', { data: { id: linkId } })
            console.log(res)
            setLinks(links.filter(l => l.id !== linkId))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <MainLayout>
            <div className="max-w-screen-sm mx-auto py-24">
                <h1 className="font-bold text-center text-6xl text-neutral-800">Links</h1>
                <p className="text-neutral-600 text-center text-xl">View all my lnks</p>
                <div className="max-w-[400px] mx-auto flex flex-col space-y-4 mt-4">
                    {links.map((link, i) => {
                        return (
                            <div className="p-4 rounded-md border border-neutral-200 shadow-md flex justify-between" key={i}>
                                <p>{link.name}</p>
                                <span className="text-red-500 font-bold cursor-pointer" onClick={() => deleteLink(link.id)}>X</span>
                            </div>
                        )
                    })}
                    <AddLinkForm />
                </div>
            </div>
        </MainLayout>
    )
}
