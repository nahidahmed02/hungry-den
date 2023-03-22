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
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    {/* <Image src={photo} alt="" width='50' height='35' className="rounded-xl" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="">Category: {category}</h2>
                    <h2 className="">Name: {name}</h2>
                    <h2 className="">Price: ${price}</h2>
                    <h2 className="">Vat: {vat}</h2>
                    <h2 className="">Amount: <span onClick={decrement} className='cursor-pointer ml-2 mr-1'>-</span> {count} <span onClick={increment} className='cursor-pointer ml-1'>+</span></h2>
                    <h2 className="">Total: {count === 0 ? 0 : total}</h2>

                    <div className="card-actions">
                        <button className="btn btn-sm btn-info">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Food