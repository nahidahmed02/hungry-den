import Image from 'next/image';
import React, { useState } from 'react'

const Food = ({ food }) => {
    const { category, name, price, vat, photo } = food;

    let [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);
    }

    function decrement() {

        if (count === 0) {
            return
        }
        setCount(count - 1);
    }

    let total = price * count + parseFloat(vat) * count;

    return (
        <section>
            <div className="card bg-base-100 shadow-xl py-3">
                <figure className="px-4 pt-2 lg:px-6 lg:pt-6">
                    <Image src='https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434__480.jpg' alt="" width={170} height={95} className="rounded-xl mb-3" />
                </figure>
                <div className="text-sm mx-4 lg:mx-8">
                    <h2 className="">Category: {category}</h2>
                    <h2 className="">Name: {name}</h2>
                    <h2 className="">Price: ${price}</h2>
                    <h2 className="">Vat: {vat}</h2>
                    <h2 className="">Amount:
                        <span onClick={decrement} className='cursor-pointer ml-1 lg:ml-2 mr-1'>-</span>
                        {count}
                        <span onClick={increment} className='cursor-pointer ml-1'>+</span>
                    </h2>
                    <h2 className="">Total: {count === 0 ? 0 : total}</h2>

                    <div className="card-actions mt-2 ">
                        <button className="btn btn-xs btn-info mx-auto ">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Food