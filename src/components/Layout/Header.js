import { AuthContext } from '@/src/context/AuthProvider';
import { Context } from '@/src/context/Context';
import useUsers from '@/src/hooks/useUsers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import LogoutModal from './LogoutModal';

const Header = () => {

    const { searchQuery, handleSearch } = useContext(Context);
    const { user, logout } = useContext(AuthContext);
    const [logoutModal, setLogoutModal] = useState(null);
    const [users] = useUsers();
    const router = useRouter();
    // const [cartItems, setCartItems] = useState([]);
    // const [itemsInCart, setItemsInCart] = useState(0);

    const name = user ? user?.displayName?.split(' ')[0] : 'Unknown';
    const role = users?.find(userFromDB => userFromDB.email === user?.email)?.role;


    // ----------------------- set cart items --------------------------

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (typeof window !== undefined) {
    //             try {
    //                 const cart = await JSON.parse(localStorage.getItem('selectedFood'));
    //                 setCartItems(cart || []);
    //                 setItemsInCart(cart ? cart.length : 0);

    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     }
    //     fetchData();
    // }, [cartItems])

    const menuItems =
        <>
            <li className={`font-bold ${router.pathname === '/' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/" className='btn-sm'>Home</Link>
            </li>

            <li className={`font-bold ${router.pathname === '/cart' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/cart" className='btn-sm'>My Cart
                    {/* <span className="indicator-item badge badge-warning">
                        {itemsInCart}
                    </span> */}
                </Link>
            </li>

            {user?.uid &&
                <li className={`font-bold ${router.pathname === '/dashboard' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                    <Link href="/dashboard" className='btn-sm'>Dashboard</Link>
                </li>
            }

            <li className={`font-bold ${router.pathname === '/about' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/about" className='btn-sm'>About Us</Link>
            </li>

            {user?.uid
                ?
                <li className={`font-bold text-gray-200 -mt-1 lg:-mt-0 hover:text-orange-500`}>
                    <button onClick={() => setLogoutModal(true)} htmlFor="logout_modal" className='btn-sm'>Logout</button>
                </li>
                :
                <li className={`font-bold ${router.pathname === '/login' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                    <Link href="/login" className='btn-sm'>Login</Link>
                </li>
            }
        </>

    return (
        <header>

            <div className="fixNav">

                <div className='flex mb-0 py-1.5 justify-between bg-black border-b border-orange-500'>
                    <div className='my-auto'>
                        <Link className="normal-case font-serif font-bold text-xl md:text-xl lg:text-2xl ml-4 md:ml-12 lg:ml-14 text-orange-500" href='/'>Hungry <br className='md:hidden lg:hidden' /> <span className='text-orange-500 my-auto ml-8 md:ml-0 lg:ml-0'>Den</span></Link>
                    </div>

                    {
                        router.pathname === '/' && <div className="form-control h-8 md:h-7 lg:h-7 my-auto">
                            <input
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearch}
                                className="input bg-transparent text-orange-300 border-yellow-400 shadow shadow-white w-44 md:w-64 lg:w-96 ml-6 md:ml-10 lg:ml-0"
                            />

                        </div>
                    }

                    <div className='flex flex-col text-center px-6 md:mr-10 lg:mr-7 my-auto'>
                        <div className='flex text-yellow-400'>
                            <CgProfile className='text-lg mr-1' />
                            <p className={`font-semibold text-sm `}>{name}</p>
                        </div>
                        <p className={`font first-letter:uppercase text-xs font-bold  text-yellow-400`}>{role}</p>
                    </div>

                </div>

                {/* =================================== LARGE DEVICE MENU =================================== */}

                <div className="hidden lg:flex justify-center bg-gray-700 border-b border-orange-500">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}

                    </ul>
                </div>

                {/* =================================== SMALL DEVICE MENU =================================== */}

                <div className="bottom-0 fixed flex md:hidden lg:hidden w-full bg-gray-700 border-t border-orange-500">
                    <ul className="flex mx-auto px-1 py-2.5">
                        {menuItems}
                    </ul>
                </div>

                {/* =================================== CART LOGO =================================== */}

                {
                    router.pathname === '/' && <Link href='/cart' className="indicator fixed bottom-16 right-6">
                        {/* <span className="indicator-item badge">
                            {itemsInCart}
                        </span> */}

                        <BsCart4 className='text-5xl rounded text-black bg-yellow-500' />
                    </Link>
                }

            </div>

            {
                logoutModal && <LogoutModal
                    setLogoutModal={setLogoutModal}
                    logout={logout}
                ></LogoutModal>
            }

        </header>
    )
}

export default Header