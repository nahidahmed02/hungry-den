import React from 'react'

const DeleteItem = () => {
    return (
        <section>
            <h2 className='mt-6 text-2xl font-serif font-bold text-orange-500 text-center'>Delete Item</h2>

            <div className="overflow-x-auto mx-32 mt-5 border rounded-t-lg border-black border-b-0">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center text-white'>
                            <td className='bg-orange-500 '>SL No.</td>
                            <th className='bg-orange-500 '>Name</th>
                            <th className='bg-orange-500 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className='text-center'>
                            <th className='border border-b-black'>1</th>
                            <td className='border border-b-black'>Cy Ganderton</td>
                            <td className='border border-b-black'>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DeleteItem