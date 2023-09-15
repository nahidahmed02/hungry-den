import Link from 'next/link'
import React from 'react'

const PaymentOpts = () => {

    return (
        <section className='pt-24 h-screen'>

            <h2 className='border-b-2 border-b-orange-500 mt-8 -mb-20 mx-10 md:mx-24 lg:mx-56'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Payment Options</h2>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mx-20 md:mx-40 lg:mx-36 text-orange-500 '>

                <Link href='/paymentOpt/cashOnDelivery' className='text-center cursor-pointer border border-yellow-500 shadow shadow-gray-200 hover:text-gray-200 hover:bg-orange-500'>
                    <div className='cashOnDelivery py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-xl lg:text-2xl font-bold mb-2'>Cash on Delivery</p>
                    </div>
                </Link>

                <Link href='/paymentOpt/payOnline' className='text-center cursor-pointer border border-yellow-500 shadow shadow-gray-200 hover:text-gray-200 hover:bg-orange-500'>
                    <div className='cashFromCard py-10 lg:py-20  '>

                    </div>
                    <div>
                        <p className='text-xl lg:text-2xl font-bold mb-2'>Online Payment</p>
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default PaymentOpts