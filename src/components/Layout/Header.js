// import { Context } from '@/context/Context';
import { Context } from '@/src/context/Context';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

const Header = () => {
    const router = useRouter();

    const { searchQuery, handleSearch } = useContext(Context);
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof window !== undefined) {
                try {
                    const cart = await JSON.parse(localStorage.getItem('selectedFood'));
                    setCartItems(cart || []);
                    setItemsInCart(cart ? cart.length : 0);

                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchData();
    }, [cartItems])


    const menuItems =
        <>
            <li className={`font-bold ${router.pathname === '/' ? 'active-link' : ''} `}>
                <Link href="/">Home</Link>
            </li>

            <li className={`font-bold ${router.pathname === '/cart' ? 'active-link' : ''} `}>
                <Link href="/cart">My Cart
                    <span className="indicator-item badge badge-warning">
                        {itemsInCart}
                    </span>
                </Link>
            </li>

            <li className={`font-bold ${router.pathname === '/dashboard' ? 'active-link' : ''} `}>
                <Link href="/dashboard">Dashboard</Link>
            </li>

            <li className={`font-bold ${router.pathname === '/about' ? 'active-link' : ''} `}>
                <Link href="/about">About Us</Link>
            </li>

            <li className={`font-bold ${router.pathname === '/login' ? 'active-link' : ''} `}>
                <Link href="/login">Register</Link>
            </li>
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
                    <Link className="normal-case font-serif font-bold text-2xl italic ml-24 text-orange-400 " href='/'>Friends <span className='text-yellow-400'>Kebab</span></Link>
                </div>

                {
                    router.pathname === '/' && <div className="form-control h-8 lg:mr-14">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input bg-transparent text-orange-300 border-yellow-400"
                        />

                    </div>
                }

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