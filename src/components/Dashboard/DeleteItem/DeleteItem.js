import React, { useContext, useState } from 'react';
import { Context } from '@/src/context/Context';
import Modal from './Modal';
import ItemsCard from './ItemsCard';

const DeleteItem = () => {
    const { foods, refetch } = useContext(Context);
    const [deleteItemModal, setDeleteItemModal] = useState(null);

    return (
        <section>
            <h2 className='lg:mt-6 mb-4 text-2xl font-serif font-bold text-orange-500 text-center'>Delete Item</h2>

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