import Link from 'next/link'
import React, { useState } from 'react'
import Modal from './Modal';
import cashOnDelevery from '../../../public/images/cash_on_delevery.png'

const PaymentOpts = () => {
    const [modal, setModal] = useState(null);

    return (
        <section className='pt-24 h-screen'>
            <h2 className='text-orange-500 font-serif text-center text-3xl font-bold mt-8 mb-8'>Payment Options</h2>

            <div className='grid grid-cols-2 gap-6 lg:gap-10 mx-6 md:mx-16 lg:mx-36 text-orange-500 '>

                <div onClick={() => setModal(true)} className='text-center cursor-pointer border border-yellow-300 shadow shadow-white hover:text-white hover:bg-orange-500'>
                    <div className='cashOnDelevery py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-2xl font-bold mb-2'>Cash on Delevery</p>
                    </div>
                </div>

                <Link href='/paymentOpt/card' className='text-center cursor-pointer border border-yellow-300 shadow shadow-white hover:text-white hover:bg-orange-500'>
                    <div className='cashFromCard py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-2xl font-bold mb-2'>Card</p>
                    </div>
                </Link>


                {/* <Link href='/paymentOpt/card' className='text-center py-10 lg:py-20 cursor-pointer border border-yellow-300 hover:text-white shadow shadow-white hover:bg-orange-500'>
                    <p className='text-2xl mt-3.5 md:mt-0 lg:mt-0 font-bold'>Card</p>
                </Link> */}
            </div>

            {
                modal && <Modal
                    modal={modal}
                    setModal={setModal}
                ></Modal>
            }

        </section>
    )
}

export default PaymentOpts