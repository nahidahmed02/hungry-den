import React from 'react'

const Orders = () => {
    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Orders</h2>

            <div className="overflow-x-auto mx-3 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center text-white'>
                            <td className='bg-orange-500 '>SL No.</td>
                            <th className='bg-orange-500 '>Customer</th>
                            <th className='bg-orange-500 '>Email</th>
                            <th className='bg-orange-500 '>Ordered Items</th>
                            <th className='bg-orange-500 '>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className='text-center'>
                            <td className='border border-b-black'>index</td>
                            <td className='border border-b-black'>name</td>
                            <td className='border border-b-black'>www.sdfdd.com</td>
                            <td className='border border-b-black'>items</td>
                            <td className='border border-b-black'><button className='btn btn-xs border-none bg-red-500'>Cancel Order</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Orders