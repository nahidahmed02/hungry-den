import { AuthContext } from '@/src/context/AuthProvider';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Loading/Loading';
import OrdersRow from './OrdersRow';
import Modal from './Modal';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    const [modal, setModal] = useState(null);

    const { data: orderDetails, isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const res = await fetch(`https://hungry-den-server.onrender.com/order/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = res.json();
            return data;
        }
    })

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>My Orders</h2>

            {
                orderDetails?.length === 0
                    ?
                    <p className='font-bold text-center text-2xl italic text-red-500'>You haven&rsquo;t ordered anything yet!</p>
                    :
                    <div className="overflow-x-auto mx-4 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                        <table className="table w-full">
                            <thead>
                                <tr className='text-center text-white'>
                                    <td className='bg-orange-500 '>Date</td>
                                    <th className='bg-orange-500 '>Payment Type</th>
                                    <th className='bg-orange-500 '>Ordered Items</th>
                                    <th className='bg-orange-500 '>Delivery Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    orderDetails?.map(info => <OrdersRow
                                        key={info._id}
                                        info={info}
                                        setModal={setModal}
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

        </section>)
}

export default MyOrders