import React, { useContext, useState } from 'react';
import ItemsRow from './ItemsRow';
import { Context } from '@/src/context/Context';
import Modal from './Modal';

const DeleteItem = () => {
    const { foods } = useContext(Context);
    const [deleteItemModal, setDeleteItemModal] = useState(null);

    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Delete Item</h2>

            <div className="overflow-x-auto mx-3 lg:mx-28 mb-8 border rounded-t-lg border-black border-b-0">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center text-white'>
                            <td className='bg-orange-500 '>SL No.</td>
                            <th className='bg-orange-500 '>Category</th>
                            <th className='bg-orange-500 '>Name</th>
                            <th className='bg-orange-500 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods?.map((item, index) => <ItemsRow
                                key={item._id}
                                item={item}
                                index={index}
                                setDeleteItemModal={setDeleteItemModal}
                            ></ItemsRow>)
                        }
                    </tbody>
                </table>
            </div>

            {
                deleteItemModal && <Modal
                    setDeleteItemModal={setDeleteItemModal}
                ></Modal>
            }

        </section>
    )
}

export default DeleteItem