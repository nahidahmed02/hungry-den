import React, { useContext, useState } from 'react';
import { Context } from '@/src/context/Context';
import Modal from './Modal';
import ItemsCard from './ItemsCard';

const DeleteItem = () => {
    const { foods, refetch } = useContext(Context);
    const [deleteItemModal, setDeleteItemModal] = useState(null);

    return (
        <section>

            <h2 className='border-b-2 border-b-gray-200 mt-12 -mb-20 mx-16 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Delete Item</h2>

            <div className='mx-4 lg:mx-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-5 mb-12'>
                {
                    foods?.map(item => <ItemsCard
                        key={item._id}
                        item={item}
                        setDeleteItemModal={setDeleteItemModal}
                    ></ItemsCard>)
                }

            </div>

            {
                deleteItemModal && <Modal
                    deleteItemModal={deleteItemModal}
                    setDeleteItemModal={setDeleteItemModal}
                    refetch={refetch}
                ></Modal>
            }

        </section>
    )
}

export default DeleteItem