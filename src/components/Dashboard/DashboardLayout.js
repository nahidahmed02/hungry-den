import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { VscNotebook } from 'react-icons/vsc'
import { BiAddToQueue } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const DashboardLayout = ({ children }) => {
    return (
        <section className='mt-20'>

            <div className="drawer drawer-mobile" style={{ position: 'relative' }}>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className='ml-6 text-3xl font-serif font-bold text-orange-500'>Dashboard</h2>

                    {children}
                </div>

                <div className="drawer-side mb-auto mt-8 sticky">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 overflow-y-auto w-52 text-base-content">
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard'>
                                <CgProfile className='text-xl' /> Profile
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/orders'>
                                <VscNotebook /> Orders
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/addItem'>
                                <BiAddToQueue /> Add Item
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/deleteItem'>
                                <MdDelete /> Delete Item
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/manageUsers'>
                                Manage Users
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/myOrders'>
                                My Orders
                            </Link>
                        </li>

                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'>
                            <Link href='/dashboard/addReview'>
                                Add Review
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default DashboardLayout