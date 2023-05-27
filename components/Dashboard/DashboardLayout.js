import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
    return (
        <section className='mt-24 mb-20'>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <h2 className='ml-6'>Dashboard</h2>

                    {children}
                </div>
                <div className="drawer-side mb-auto mt-14 lg:ml-3">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-52 bg-orange-400 text-base-content">
                        <li className='text-white font-bold'><Link href='/dashboard/addItem'>Add Item</Link></li>
                        <li className='text-white font-bold'><Link href='/dashboard/deleteItem'>Delete Item</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default DashboardLayout