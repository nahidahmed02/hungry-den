import { AuthContext } from '@/src/context/AuthProvider';
import { Context } from '@/src/context/Context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { RxDashboard } from 'react-icons/rx';
import { BsInfoCircle } from 'react-icons/bs';
import { VscSignIn } from 'react-icons/vsc';
import { FiLogOut } from 'react-icons/fi';
import LogoutModal from './LogoutModal';
import useAdmin from '@/src/hooks/useAdmin';
import useDMan from '@/src/hooks/useDMan';
import useToken from '@/src/hooks/useToken';

const Header = () => {

    const { searchQuery, handleSearch } = useContext(Context);
    const { user, logout } = useContext(AuthContext);
    const [logoutModal, setLogoutModal] = useState(null);
    const [admin] = useAdmin(user);
    const [dMan] = useDMan(user);
    const [token] = useToken(user?.email);
    const router = useRouter();

    const name = user ? user?.displayName?.split(' ')[0] : 'Unknown';

    const menuItems =
        <>
            <li className={`font-bold flex flex-col ${router.pathname === '/' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/" className='btn-sm '><AiFillHome className='text-2xl lg:text-lg mx-3 lg:mx-auto' /><span className='hidden lg:flex'>Home</span></Link>
            </li>

            <li className={`font-bold flex flex-col ${router.pathname === '/cart' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/cart" className='btn-sm'><BsCart4 className='text-2xl lg:text-lg  mx-3 lg:mx-auto' /><span className='hidden lg:flex'>My Cart</span>

                </Link>
            </li>

            {user?.uid &&
                <li className={`font-bold flex flex-col ${router.pathname === '/dashboard' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                    <Link href="/dashboard" className='btn-sm'><RxDashboard className='text-2xl lg:text-lg  mx-3 lg:mx-auto' /><span className='hidden lg:flex'>Dashboard</span></Link>
                </li>
            }

            <li className={`font-bold flex flex-col ${router.pathname === '/about' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                <Link href="/about" className='btn-sm'><BsInfoCircle className='text-2xl lg:text-lg  mx-3 lg:mx-auto' /><span className='hidden lg:flex'>About Us</span></Link>
            </li>

            {user?.uid
                ?
                <li className={`font-bold flex flex-col text-gray-200 hover:text-orange-500`}>
                    <button onClick={() => setLogoutModal(true)} htmlFor="logout_modal" className='btn-sm -mt-0.5 lg:-mt-0'><FiLogOut className='text-2xl lg:text-lg  mx-3 lg:mx-auto' /><span className='hidden lg:flex'>Logout</span></button>
                </li>
                :
                <li className={`font-bold flex flex-col  ${router.pathname === '/login' ? 'text-orange-500' : 'text-gray-200'} hover:text-orange-500`}>
                    <Link href="/login" className='btn-sm'><VscSignIn className='text-2xl lg:text-lg  mx-3 lg:mx-auto' /><span className='hidden lg:flex'>Login</span></Link>
                </li>
            }
        </>

    return (
        <header>

            <div className="fixNav">

                <div className='flex mb-0 py-1.5 justify-between bg-black border-b border-orange-500'>
                    <div className='my-auto'>
                        <Link className="logo-font text-xl md:text-xl lg:text-2xl ml-4 md:ml-12 lg:ml-14 text-orange-500" href='/'>Hungry <br className='md:hidden lg:hidden' /> <span className='text-orange-500 my-auto ml-8 md:ml-0 lg:ml-0'>Den</span></Link>
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

                        {
                            admin
                            &&
                            <p className={`font first-letter:uppercase text-xs font-bold  text-yellow-400`}>Role: Admin</p>
                        }

                        {
                            dMan
                            &&
                            <p className={`font first-letter:uppercase text-xs font-bold  text-yellow-400`}>Role: D. Man</p>
                        }

                        {
                            user && (!admin && !dMan)
                            &&
                            <p className={`font first-letter:uppercase text-xs font-bold  text-yellow-400`}>Role: User</p>
                        }

                        {
                            !token
                            &&
                            <p className={`font first-letter:uppercase text-xs font-bold  text-yellow-400`}>Role: Guest</p>
                        }

                    </div>

                </div>

                {/* =================================== LARGE DEVICE MENU =================================== */}

                <div className="hidden lg:flex justify-center bg-gray-700 border-b border-orange-500">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}

                    </ul>
                </div>

                {/* =================================== SMALL DEVICE MENU =================================== */}

                <div className="bottom-0 fixed flex lg:hidden w-full bg-gray-700 border-t border-orange-500">
                    <ul className="flex mx-auto py-1.5 ">
                        {menuItems}
                    </ul>
                </div>

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