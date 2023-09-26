import Link from 'next/link';
import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { VscNotebook } from 'react-icons/vsc';
import { BiAddToQueue } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { FaUsersCog } from 'react-icons/fa';
import { GoListOrdered } from 'react-icons/go';
import { MdRateReview } from 'react-icons/md';
import { MdDeliveryDining } from 'react-icons/md';
import { useRouter } from 'next/router';
import useAdmin from '@/src/hooks/useAdmin';
import { AuthContext } from '@/src/context/AuthProvider';
import useDMan from '@/src/hooks/useDMan';

const DashboardLayout = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [admin] = useAdmin(user);
    const [dMan] = useDMan(user);
    const router = useRouter();

    return (
        <section className='pt-20'>

            <div className="drawer drawer-mobile" style={{ position: 'relative' }}>

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer-2" tabIndex={1} className="btn ml-4 shadow shadow-gray-200 bg-black hover:bg-custom-500 text-custom-500 hover:text-gray-200 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <div className='lg:ml-48'>
                        {children}
                    </div>
                </div>

                <div className="drawer-side mb-auto mt-8 lg:fixed">

                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 overflow-y-auto w-52 bg-transparent text-base-content">

                        {/* ======================================= Common Routes ======================================= */}


                        <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard' && '-mr-2.5 ml-2.5'}`}>
                            <Link href='/dashboard' className={`${router.pathname === '/dashboard' && 'bg-custom-500'} hover:bg-custom-500`}>
                                <CgProfile className='text-xl' /> Profile
                            </Link>
                        </li>

                        <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/myOrders' && '-mr-2.5 ml-2.5'}`}>
                            <Link href='/dashboard/myOrders' className={`${router.pathname === '/dashboard/myOrders' && 'bg-custom-500'} hover:bg-custom-500`}>
                                <GoListOrdered /> My Orders
                            </Link>
                        </li>

                        {/* ========================================= User Routes ======================================== */}

                        {
                            (!admin && !dMan)
                            &&
                            <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/addReview' && '-mr-2.5 ml-2.5'}`}>
                                <Link href='/dashboard/addReview' className={`${router.pathname === '/dashboard/addReview' && 'bg-custom-500'} hover:bg-custom-500`}>
                                    <MdRateReview /> Add Review
                                </Link>
                            </li>
                        }

                        {/* ========================================= Admin Routes ======================================== */}

                        {
                            admin
                            &&
                            <>
                                <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/orders' && '-mr-2.5 ml-2.5'}`}>
                                    <Link href='/dashboard/orders' className={`${router.pathname === '/dashboard/orders' && 'bg-custom-500'} hover:bg-custom-500`}>
                                        <VscNotebook /> Orders
                                    </Link>
                                </li>


                                <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/addItem' && '-mr-2.5 ml-2.5'}`}>
                                    <Link href='/dashboard/addItem' className={`${router.pathname === '/dashboard/addItem' && 'bg-custom-500'} hover:bg-custom-500`}>
                                        <BiAddToQueue /> Add Item
                                    </Link>
                                </li>

                                <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/deleteItem' && '-mr-2.5 ml-2.5'}`}>
                                    <Link href='/dashboard/deleteItem' className={`${router.pathname === '/dashboard/deleteItem' && 'bg-custom-500'} hover:bg-custom-500`}>
                                        <MdDelete /> Delete Item
                                    </Link>
                                </li>

                                <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/manageUsers' && '-mr-2.5 ml-2.5'}`}>
                                    <Link href='/dashboard/manageUsers' className={`${router.pathname === '/dashboard/manageUsers' && 'bg-custom-500'} hover:bg-custom-500`}>
                                        <FaUsersCog /> Manage Users
                                    </Link>
                                </li>
                            </>
                        }

                        {/* ===================================== Deliveryman Routes ===================================== */}

                        {
                            dMan
                            &&
                            <li className={`text-gray-200 font-bold bg-black rounded-md mb-2 shadow shadow-gray-200 ${router.pathname === '/dashboard/delivery' && '-mr-2.5 ml-2.5'}`}>
                                <Link href='/dashboard/delivery' className={`${router.pathname === '/dashboard/delivery' && 'bg-custom-500'} hover:bg-custom-500`}>
                                    <MdDeliveryDining /> Delivery
                                </Link>
                            </li>
                        }

                    </ul>

                </div>
            </div>
        </section>
    )
}

export default DashboardLayout