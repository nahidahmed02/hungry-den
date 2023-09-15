import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='flex justify-around lg:justify-evenly mt-16 mb-10 lg:mb-0 py-8 lg:py-12 text-gray-200 border-t border-t-yellow-500'>

            <div>
                <h2 className='logo-font text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500'>Hungry Den</h2>

                <h2 className='text-sm italic py-2'>&copy; <span className='font-semibold'>Hungry Den</span> 2023</h2>

                <h2 className='text-sm'>All Rights Reserved</h2>
            </div>

            <nav className='my-auto'>
                <header className="text-lg font-semibold ml-2 mb-2.5">Join Us</header>
                <div className="grid grid-flow-col gap-4">

                    <Link href='https://www.facebook.com'>
                        <FaFacebookF className='text-2xl md:text-3xl lg:text-3xl py-0.5 hover:text-blue-500' />
                    </Link>
                    <Link href='https://www.instagram.com'>
                        <AiFillInstagram className='text-2xl md:text-3xl lg:text-3xl hover:text-violet-300' />
                    </Link>
                    <Link href='https://twitter.com'>
                        <AiOutlineTwitter className='text-2xl md:text-3xl lg:text-3xl hover:text-blue-500' />
                    </Link>

                </div>
            </nav>

        </footer>
    )
}

export default Footer