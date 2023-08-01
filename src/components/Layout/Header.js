import { AuthContext } from '@/src/context/AuthProvider';
import { Context } from '@/src/context/Context';
import useUsers from '@/src/hooks/useUsers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const Header = () => {

    const { searchQuery, handleSearch } = useContext(Context);
    const { user, logout } = useContext(AuthContext);
    const [users] = useUsers();
    const router = useRouter();
    const [cartItems, setCartItems] = useState([]);
    const [itemsInCart, setItemsInCart] = useState(0);

    const name = user ? user.displayName.split(' ')[0] : 'Unknown';
    const role = users?.find(userFromDB => userFromDB.email === user?.email)?.role;


    // ----------------------- set cart items --------------------------

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


    const handleLogOut = () => {
        logout()
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

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

            {user?.uid &&
                <li className={`font-bold ${router.pathname === '/dashboard' ? 'active-link' : ''} `}>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
            }

            <li className={`font-bold ${router.pathname === '/about' ? 'active-link' : ''} `}>
                <Link href="/about">About Us</Link>
            </li>

            {user?.uid
                ?
                <li className={`font-bold`}>
                    <button onClick={handleLogOut}>Logout</button>
                </li>
                :
                <li className={`font-bold ${router.pathname === '/login' ? 'active-link' : ''} `}>
                    <Link href="/login">Login</Link>
                </li>
            }


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
                    <Link className="normal-case font-serif font-bold md:text-xl lg:text-2xl italic ml-4 md:mx-auto lg:ml-24 text-orange-500 " href='/'>Friends <span className='text-yellow-400'>Kebab</span></Link>
                </div>

                {
                    router.pathname === '/' && <div className="form-control h-6 md:h-7 lg:h-8 lg:mr-14">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input bg-transparent text-orange-300 border-yellow-400 w-40 md:w-48 lg:w-56 ml-7 md:ml-44 lg:ml-0"
                        />

                    </div>
                }

                <div className="navbar-end hidden lg:flex mr-8">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}

                    </ul>
                </div>


                <div className='flex flex-col px-6 py-0.5 border border-white'>
                    <div className='flex text-orange-400'>
                        <CgProfile className='text-lg mr-1' />
                        <p className={`font-semibold text-sm `}>{name}</p>
                    </div>
                    <p className={`font first-letter:uppercase text-xs`}>{role}</p>
                </div>


                {
                    router.pathname === '/' && <Link href='/cart' className="indicator fixed bottom-16 right-6">
                        <span className="indicator-item badge">
                            {itemsInCart}
                        </span>

                        <BsCart4 className='text-5xl rounded text-black bg-yellow-500' />
                    </Link>
                }
            </div>

        </header>
    )
}

export default Header