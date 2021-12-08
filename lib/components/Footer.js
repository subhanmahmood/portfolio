import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white w-full py-32">
            <div className="container mx-auto">
                <div className="w-8/12 mx-auto">
                    <div className="flex flex-col items-end w-full space-y-8">
                        <div className="flex flex-row justify-between w-full">
                            <img src="/icons/footer-logo.svg" />
                            <div className="flex flex-col gap-y-2">
                                <p className="font-semibold text-lg">Links</p>
                                <a>About</a>
                                <a>My Work</a>
                                <a>Contact</a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-8">
                            <img src="/icons/lin-white.svg" />
                            <img src="/icons/ig-white.svg" />
                            <img src="/icons/twt-white.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
