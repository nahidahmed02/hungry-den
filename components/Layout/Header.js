import Link from 'next/link'
import React from 'react'

const Header = () => {
    const menuItems =
        <>
            <li className='font-bold'><Link href="/">Home</Link></li>
            <li className='font-bold'><Link href="/cart">My Cart</Link></li>
            <li className='font-bold'><Link href="/dashboard">Dashboard</Link></li>
            <li className='font-bold'><Link href="/about">About Us</Link></li>
            <li className='font-bold'><Link href="/register">Register Now</Link></li>
        </>
    return (
        <header>
            <div className="navbar fixNav bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="normal-case font-serif font-bold text-2xl italic ml-24 text-orange-400 " href='/'>Friends <span className='text-yellow-400'>Kebab</span> 🔥</Link>
                </div>

                <div className="navbar-end hidden lg:flex mr-20">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}

                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header