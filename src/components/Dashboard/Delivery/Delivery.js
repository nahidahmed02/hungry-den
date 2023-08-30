import React from 'react';

const Delivery = () => {
    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Delivery Orders</h2>

            {/* {
                allOrderDetails?.length === 0
                    ?
                    <p className='font-bold text-center text-2xl italic text-red-500'>No delivery order yet!</p>
                    : */}
            <div className="overflow-x-auto mx-3 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center text-white'>
                            <td className='bg-orange-500 '>Date</td>
                            <th className='bg-orange-500 '>Order&rsquo;s Details</th>
                            <th className='bg-orange-500 '>Payment Type</th>
                            <th className='bg-orange-500 '>Delivery Status</th>
                            <th className='bg-orange-500 '>Delivered By</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>
                </table>
            </div>
            {/* } */}



        </section>
    );
};

export default Delivery;