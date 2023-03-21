import Link from 'next/link'
import React from 'react'

const Header = () => {
    const menuItems =
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Dashboard</Link></li>
            <li><Link href="/">My Cart</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/">Register Now</Link></li>
        </>
    return (
        <header>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl italic">N E <span className='text-red-600 text-3xl mx-1 '> X </span> T</a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}

                    </ul>
                </div>

            </div>
        </header>
    )
}

export default Header