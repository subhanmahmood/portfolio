import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import AddLinkForm from 'lib/components/AddLinkForm'
import LinkCard from 'lib/components/LinkCard'
import { useAuth } from 'lib/contexts/AuthContext'
import { ReactSortable } from "react-sortablejs";
import { FaTiktok, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import Head from 'next/head'

export default function index() {
    const { currentUser } = useAuth()
    const [links, setLinks] = useState([])

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const res = await axios.get('/api/links')
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
            const res = await axios.post('/api/links', link,
                { headers: { Authorization: 'Bearer ' + currentUser.accessToken } })
            setLinks([...links, res.data[0]])
        } catch (err) {
            console.log(err)
        }
    }

    const updateLink = async (link, updateState) => {
        try {
            const res = await axios.put('/api/links', link,
                { headers: { Authorization: 'Bearer ' + currentUser.accessToken } })
            console.log(res)
            if (updateState) {
                let updatedLinks = Object.assign(links)
                const idx = updatedLinks.indexOf(updatedLinks.find(l => l.id === link.id))
                updatedLinks[idx] = link;
                setLinks([...updatedLinks])
            }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteLink = async (link) => {
        try {
            const res = await axios.delete('/api/links',
                {
                    headers: { Authorization: 'Bearer ' + currentUser.accessToken },
                    data: { id: link.id }
                })
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
        <div className="max-w-screen-sm mx-auto py-8 md:py-24">
            <Head>
                <title>subhan.io | Links</title>
            </Head>
            <h1 className="font-bold text-center text-4xl md:text-6xl text-neutral-800">Links</h1>
            <p className="text-neutral-600 text-center text-lg md:text-xl">View all my links</p>
            <div className="hidden md:flex flex-row items-center justify-center space-x-12 mt-8 mb-8">
                <Link href="https://twitter.com/subhanmahmoood" target="none">
                    <FaTwitter className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://instagram.com/subhan.mahmoood" target="none">
                    <FaInstagram className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://linkedin.com/in/subhanmahmood" target="none">
                    <FaLinkedinIn className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://tiktok.com/subhan.mahmood" target="none">
                    <FaTiktok className="text-neutral-800 hover:text-neutral-500 h-7 cursor-pointer" />
                </Link>
            </div>
            <div className="max-w-[400px] px-4 mx-auto flex flex-col space-y-4 mt-4">
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
    )
}
