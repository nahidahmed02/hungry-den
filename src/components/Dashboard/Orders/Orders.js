import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import OrdersRow from './OrdersRow';
import Modal from './Modal';
import DManModal from './DManModal';

const Orders = () => {

    const [modal, setModal] = useState(null);
    const [dManModal, setDManModal] = useState(null);

    const { data: allOrderDetails, isLoading, refetch } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/order`);
            const data = res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Orders</h2>

            {
                allOrderDetails?.length === 0
                    ?
                    <p className='font-bold text-center text-2xl italic text-red-500'>No order yet!</p>
                    :
                    <div className="overflow-x-auto mx-3 lg:mx-24 mb-8 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-white'>
                                    <td className='bg-orange-500 '>Date</td>
                                    <th className='bg-orange-500 '>Order&rsquo;s Details</th>
                                    <th className='bg-orange-500 '>Payment Type</th>
                                    <th className='bg-orange-500 '>Delivery Status</th>
                                    <th className='bg-orange-500 '>Delivery Progress</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    allOrderDetails?.map(details => <OrdersRow
                                        key={details._id}
                                        details={details}
                                        setModal={setModal}
                                        setDManModal={setDManModal}
                                    ></OrdersRow>)
                                }
                            </tbody>
                        </table>
                    </div>
            }

            {
                modal && <Modal
                    modal={modal}
                    setModal={setModal}
                ></Modal>
            }

            {
                dManModal && <DManModal
                    dManModal={dManModal}
                    setDManModal={setDManModal}
                    refetch={refetch}
                ></DManModal>
            }

        </section>
    )
}

export default Orders