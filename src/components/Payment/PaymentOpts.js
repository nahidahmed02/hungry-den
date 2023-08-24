import Link from 'next/link'
import React, { useState } from 'react'
import Modal from './Modal';
import useCart from '@/src/hooks/useCart';

const PaymentOpts = () => {
    const [modal, setModal] = useState(null);
    const {
        selectedFoods,
        setSelectedFoods,
        sumOfAllPrice,
        includingDeliveryChrg
    } = useCart();


    return (
        <section className='pt-24 h-screen'>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mt-8 mb-8'>Payment Options</h2>

            <div className='grid grid-cols-2 gap-6 lg:gap-10 mx-6 md:mx-16 lg:mx-36 text-orange-500 '>

                <div onClick={() => setModal(true)} className='text-center cursor-pointer border border-yellow-300 shadow shadow-white hover:text-white hover:bg-orange-500'>
                    <div className='cashOnDelivery py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-xl lg:text-2xl font-bold mb-2'>Cash on Delivery</p>
                    </div>
                </div>

                <Link href='/paymentOpt/card' className='text-center cursor-pointer border border-yellow-300 shadow shadow-white hover:text-white hover:bg-orange-500'>
                    <div className='cashFromCard py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-xl lg:text-2xl font-bold mb-2'>Card</p>
                    </div>
                </Link>
            </div>

            {
                modal && <Modal
                    setModal={setModal}
                    selectedFoods={selectedFoods}
                    setSelectedFoods={setSelectedFoods}
                    sumOfAllPrice={sumOfAllPrice}
                    includingDeliveryChrg={includingDeliveryChrg}
                ></Modal>
            }

        </section>
    )
}

export default PaymentOpts