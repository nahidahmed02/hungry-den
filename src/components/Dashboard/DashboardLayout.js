import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { VscNotebook } from 'react-icons/vsc'
import { BiAddToQueue } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { FaUsersCog } from 'react-icons/fa'
import { GoListOrdered } from 'react-icons/go'
import { MdRateReview } from 'react-icons/md'
import { MdDeliveryDining } from 'react-icons/md'
import { useRouter } from 'next/router'

const DashboardLayout = ({ children }) => {
    const router = useRouter();

    return (
        <section className='pt-20'>

            <div className="drawer drawer-mobile" style={{ position: 'relative' }}>

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer-2" tabIndex={1} className="btn ml-4 shadow shadow-white bg-gray-700 hover:bg-orange-500 text-gray-200 hover:text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <div className='lg:ml-48'>
                        {children}
                    </div>
                </div>

                <div className="drawer-side mb-auto mt-8 lg:fixed">

                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 overflow-y-auto w-52 bg-transparent text-base-content">

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard' className={`${router.pathname === '/dashboard' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <CgProfile className='text-xl' /> Profile
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/orders' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/orders' className={`${router.pathname === '/dashboard/orders' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <VscNotebook /> Orders
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/addItem' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/addItem' className={`${router.pathname === '/dashboard/addItem' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <BiAddToQueue /> Add Item
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/deleteItem' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/deleteItem' className={`${router.pathname === '/dashboard/deleteItem' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <MdDelete /> Delete Item
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/manageUsers' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/manageUsers' className={`${router.pathname === '/dashboard/manageUsers' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <FaUsersCog /> Manage Users
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/myOrders' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/myOrders' className={`${router.pathname === '/dashboard/myOrders' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <GoListOrdered /> My Orders
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/addReview' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/addReview' className={`${router.pathname === '/dashboard/addReview' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <MdRateReview /> Add Review
                            </Link>
                        </li>

                        <li className={`text-gray-200 hover:text-white font-bold bg-black rounded-md mb-2 shadow shadow-white ${router.pathname === '/dashboard/delivery' && '-mr-2.5 ml-2.5 text-white'}`}>
                            <Link href='/dashboard/delivery' className={`${router.pathname === '/dashboard/delivery' && 'bg-orange-500'} hover:bg-orange-500`}>
                                <MdDeliveryDining /> Delivery
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default DashboardLayout