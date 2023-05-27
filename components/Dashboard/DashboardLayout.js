import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <section className='mt-24 mb-8 border border-black'>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2 className='ml-6 text-3xl font-serif font-bold text-orange-500 sticky'>Dashboard</h2>

                    {children}
                </div>
                <div className="drawer-side mb-auto mt-8 lg:ml-3 sticky">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 text-base-content">
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/profile'>Profile</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/orders'>Orders</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/addItem'>Add Item</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/deleteItem'>Delete Item</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/manageUsers'>Manage Users</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/myOrders'>My Orders</Link></li>
                        <li className='text-white font-bold bg-orange-400 rounded-md mb-1'><Link href='/dashboard/addReview'>Add Review</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default DashboardLayout