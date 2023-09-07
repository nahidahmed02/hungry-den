import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import { AuthContext } from '@/src/context/AuthProvider';
import DeliveryRow from './DeliveryRow';
import Modal from './Modal';
import ConfirmModal from './ConfirmModal';

const Delivery = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;

    const [modal, setModal] = useState(null);
    const [confirmModal, setConfirmModal] = useState(null);

    const { data: allOrders, isLoading, refetch } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/order`);
            const data = res.json();
            return data;
        }
    })

    const assignedDeliveries = allOrders?.filter(order => order?.dManInfo?.email === email)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Delivery Orders</h2>

            {
                assignedDeliveries?.length === 0
                    ?
                    <p className='font-bold text-center text-2xl italic text-red-500'>No delivery order yet!</p>
                    :
                    <div className="overflow-x-auto mx-3 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-white'>
                                    <td className='bg-orange-500 '>Order&rsquo;s Details</td>
                                    <th className='bg-orange-500 '>Payment Type</th>
                                    <th className='bg-orange-500 '>Delivery Status</th>
                                    <th className='bg-orange-500 '>Delivery Progress</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    assignedDeliveries?.map(info => <DeliveryRow
                                        key={info._id}
                                        info={info}
                                        setModal={setModal}
                                        setConfirmModal={setConfirmModal}
                                    ></DeliveryRow>)
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
                confirmModal && <ConfirmModal
                    confirmModal={confirmModal}
                    setConfirmModal={setConfirmModal}
                    refetch={refetch}
                ></ConfirmModal>
            }

        </section>
    );
};

export default Delivery;