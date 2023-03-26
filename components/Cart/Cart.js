import Image from 'next/image'
import React from 'react'

const Cart = () => {
    const selectedFood = JSON.parse(localStorage?.getItem('selectedFood'))

    const handleRemoveFromCart = () => {
        localStorage.removeItem('selectedFood');
    };

    return (
        <section className='mt-20'>
            {!selectedFood ? <p>No Items Selected</p> : (
                <section>
                    <div className="card bg-base-100 shadow-xl py-3">
                        <figure className="px-4 pt-2 lg:px-6 lg:pt-6">
                            <Image src='https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434__480.jpg' alt="" width={170} height={95} className="rounded-xl mb-3" />
                        </figure>
                        <div className="text-sm mx-4 lg:mx-8">
                            <h2 className="">Category: {selectedFood?.category}</h2>
                            <h2 className="">Name: {selectedFood?.name}</h2>
                            <h2 className="">Price: ${selectedFood?.price}</h2>
                            <h2 className="">Vat: {selectedFood?.vat}</h2>
                            {/* <h2 className="">Amount:
                                <span onClick={decrement} className='cursor-pointer font-bold bg-slate-300 px-1 lg:px-1.5 lg:pb-1 ml-2 lg:ml-3 mr-1'>-</span>
                                <span className='px-2'>{count}</span>
                                <span onClick={increment} className='cursor-pointer font-bold bg-slate-300 px-1 lg:pb-1 ml-1'>+</span>
                            </h2>
                            <h2 className="">Total: {count === 0 ? 0 : total}</h2> */}

                            <div className="card-actions mt-2 ">
                                <button className="btn btn-xs btn-info mx-auto"
                                    onClick={handleRemoveFromCart}
                                >Remove From Cart</button>
                            </div>
                        </div>
                    </div>
                </section>
            )
            }
        </section>
    )
}

export default Cart