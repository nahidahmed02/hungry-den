import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Food = ({ food }) => {
    const router = useRouter();

    const { category, name, price, vat, photo } = food;

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    let [count, setCount] = useState(0);

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


    const handleAddToCart = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedFood', JSON.stringify(food))
            setIsAddedToCart(true)
        }
    }

    const handleRemoveFromCart = () => {
        localStorage.removeItem('selectedFood');
        setIsAddedToCart(false)
    };

    return (
        <section>
            <div className="card bg-base-100 shadow-xl py-3">
                <figure className="px-4 pt-2 lg:px-6 lg:pt-6">
                    <Image src='https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434__480.jpg' alt="" width={170} height={95} className="rounded-xl mb-3" />
                </figure>
                <div className="text-sm mx-4 lg:mx-8">
                    <h2 className="">Category: {category}</h2>
                    <h2 className="">Name: {name}</h2>
                    <h2 className="">Price: $ {price}</h2>
                    <h2 className="">Vat: $ {vat}</h2>
                    <h2 className="">Amount:
                        <span onClick={decrement} className='cursor-pointer font-bold bg-slate-300 px-1 lg:px-1.5 lg:pb-1 ml-2 lg:ml-3 mr-1'>-</span>
                        <span className='px-2'>{count}</span>
                        <span onClick={increment} className='cursor-pointer font-bold bg-slate-300 px-1 lg:pb-1 ml-1'>+</span>
                    </h2>
                    <h2 className="">Total: {count === 0 ? 0 : `$ ${total}`}</h2>

                    <div className="card-actions mt-2 ">
                        {(!isAddedToCart) && <button className="rounded-lg px-2 text-white font-bold btn-xs bg-blue-500 mx-auto"
                            onClick={handleAddToCart}
                        >Add to Cart</button>}

                        {(isAddedToCart) && <>
                            <button className="rounded-lg px-2 text-white font-bold btn-xs bg-green-600 mx-auto"
                                onClick={() => router.push('/cart')}
                            >Go to Cart</button>
                            <button className="rounded-lg px-2 text-white font-bold btn-xs bg-red-700 mx-auto"
                                onClick={handleRemoveFromCart}
                            >Remove From Cart</button>
                        </>}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Food