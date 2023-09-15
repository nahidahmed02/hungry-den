import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import OrdersRow from './OrdersRow';
import Modal from './Modal';
import DManModal from './DManModal';
import { AuthContext } from '@/src/context/AuthProvider';

const Orders = () => {

    const { logout } = useContext(AuthContext);
    const [modal, setModal] = useState(null);
    const [dManModal, setDManModal] = useState(null);

    const { data: allOrderDetails, isLoading, refetch } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/order`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log(res.status);
            if (res.status === 401 || res.status === 403) {
                logout()
            }
            const data = res.json();
            return data;
        }
    })
    console.log(allOrderDetails);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>

            <h2 className='border-b-2 border-b-orange-500 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Orders</h2>

            {
                allOrderDetails?.length === 0
                    ?
                    <p className='font-bold text-center text-2xl italic text-gray-200'>No order yet!</p>
                    :
                    <div className="overflow-x-auto mx-3 lg:mx-20 mb-8 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-gray-200'>
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