import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='flex justify-around lg:justify-evenly mt-16 mb-10 lg:mb-0 py-8 lg:py-12 text-white bg-gray-900'>

            <div>
                <h2 className='logo-font text-2xl md:text-3xl lg:text-4xl font-bold'>Hungry Den</h2>

                <h2 className='text-sm italic py-2'>&copy; <span className='font-semibold text-orange-'>Hungry Den</span> 2023</h2>

                <h2 className='text-sm'>All Rights Reserved</h2>
            </div>

            <nav className='my-auto'>
                <header className="text-lg font-semibold ml-2 mb-2.5">Join Us</header>
                <div className="grid grid-flow-col gap-4">

                    <FaFacebookF className='text-2xl md:text-3xl lg:text-3xl py-0.5' />
                    <AiFillInstagram className='text-2xl md:text-3xl lg:text-3xl' />
                    <AiOutlineTwitter className='text-2xl md:text-3xl lg:text-3xl' />

                </div>
            </nav>

        </footer>
    )
}

export default Footer