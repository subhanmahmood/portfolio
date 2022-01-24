import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import AddLinkForm from 'lib/components/AddLinkForm'
import LinkCard from 'lib/components/LinkCard'
import { useAuth } from 'lib/contexts/AuthContext'
import { ReactSortable } from "react-sortablejs";
import { toast } from 'react-toastify';
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
                toast(`Updated ${link.name} successfully`)
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
            toast(`Updated links order successfully`)
            setLinks([...updatedLinks])
        }
    }, [links])

    return (
        <div className="max-w-screen-sm mx-auto py-8 md:py-24">
            <Head>
                <title>subhan.io | Links</title>
                <script async data-uid="0984e58a42" src="https://prodigious-trader-6281.ck.page/0984e58a42/index.js"></script>
            </Head>
            <h1 className="font-bold text-center text-4xl md:text-6xl text-stone-800">Links</h1>
            <p className="text-stone-600 text-center text-lg md:text-xl">View all my links</p>
            <div className="flex flex-row items-center justify-center space-x-12 mt-8 mb-8">
                <Link href="https://twitter.com/subhanmahmoood" target="none">
                    <FaTwitter className="text-stone-800 hover:text-stone-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://instagram.com/subhan.mahmoood" target="none">
                    <FaInstagram className="text-stone-800 hover:text-stone-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://linkedin.com/in/subhanmahmood" target="none">
                    <FaLinkedinIn className="text-stone-800 hover:text-stone-500 h-7 cursor-pointer" />
                </Link>
                <Link href="https://www.tiktok.com/@subhan.mahmood?" target="none">
                    <FaTiktok className="text-stone-800 hover:text-stone-500 h-7 cursor-pointer" />
                </Link>
            </div>
            <div className="max-w-[400px] px-4 mx-auto flex flex-col space-y-4 mt-4">
                {
                    currentUser ? (
                        <>
                            <ReactSortable
                                className="flex flex-col space-y-4"
                                list={links}
                                setList={setLinks}>
                                {links.map((link, i) =>
                                    <LinkCard key={link.id} data={link} updateLink={updateLink} deleteLink={deleteLink} />)
                                }
                            </ReactSortable>
                            {currentUser && <AddLinkForm onSubmit={addLink} />}
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col space-y-4">
                                {links.map((link, i) =>
                                    <LinkCard key={link.id} data={link} updateLink={updateLink} deleteLink={deleteLink} />)
                                }
                            </div>
                            {currentUser && <AddLinkForm onSubmit={addLink} />}
                        </>
                    )
                }
            </div>
            <div className="flex flex-col items-center justify-center py-12">
                <h2 className="text-2xl font-medium md:text-4x text-stone-800">Get the good stuff</h2>
                <p className="prose-lg text-stone-600 mt-2">No spam ever. I promise.</p>
                <div className="max-w-screen-sm mt-4">
                    <script async data-uid="0984e58a42" src="https://prodigious-trader-6281.ck.page/0984e58a42/index.js"></script>
                </div>
            </div>
        </div>
    )
}
