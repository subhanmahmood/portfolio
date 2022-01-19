import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import MainLayout from '../../lib/components/MainLayout'
import AddLinkForm from 'lib/components/AddLinkForm'
import LinkCard from 'lib/components/LinkCard'
import { useAuth } from 'lib/contexts/AuthContext'
import { ReactSortable } from "react-sortablejs";



export default function index() {
    const { currentUser } = useAuth()
    const [links, setLinks] = useState([])

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await axios.get('/api/link')
                console.log(res.data)
                setLinks(res.data.sort((a, b) => a.order - b.order))
            } catch (err) {
                console.log(err)
            }
        }
        fetchLinks()
    }, [])

    const addLink = async (link) => {
        try {
            link.order = links.length
            const res = await axios.post('/api/link', link)
            setLinks([...links, res.data[0]])
        } catch (err) {
            console.log(err)
        }
    }

    const updateLink = async (link, updateState) => {
        try {
            const res = await axios.put('/api/link', link)
            console.log(res)
            if (updateState) {
                let updatedLinks = Object.assign(links)
                const idx = updatedLinks.indexOf(updatedLinks.find(l => l.id === link.id))
                updatedLinks[idx] = res.data[0];
                setLinks([...updatedLinks])
            }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteLink = async (link) => {
        try {
            const res = await axios.delete('/api/link', { data: { id: link.id } })
            setLinks(links.filter(l => l.id !== link.id))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        let sorted = true;
        for (let i = 0; i < links.length - 1; i++) {
            if (links[i].order > links[i + 1].order) {
                sorted = false;
                break;
            }
        }

        if (!sorted) {
            let updatedLinks = Object.assign(links)
            updatedLinks = updatedLinks.map((link, i) => {
                link.order = i;
                return link;
            })
            updatedLinks.forEach((link, i) => {
                updateLink(link, false)
            })
            setLinks([...updatedLinks])
        }
    }, [links])

    return (
        <MainLayout>
            <div className="max-w-screen-sm mx-auto py-24">
                <h1 className="font-bold text-center text-6xl text-neutral-800">Links</h1>
                <p className="text-neutral-600 text-center text-xl">View all my lnks</p>
                <div className="max-w-[400px] mx-auto flex flex-col space-y-4 mt-4">
                    <ReactSortable
                        className="flex flex-col space-y-4"
                        list={links}
                        setList={setLinks}>
                        {links.map((link, i) =>
                            <LinkCard key={link.id} data={link} updateLink={updateLink} deleteLink={deleteLink} />)
                        }
                    </ReactSortable>
                    {currentUser && <AddLinkForm onSubmit={addLink} />}
                </div>
            </div>
        </MainLayout>
    )
}
