import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Food = ({ food }) => {
    const router = useRouter();
    const { _id, category, name, price, vat, photo } = food;

    let [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const existingSelectedFood = JSON.parse(localStorage.getItem('selectedFood')) || [];
        setCartItems(existingSelectedFood);
        setIsAddedToCart(existingSelectedFood.some((item) => item._id === _id));
    }, [_id]);

    function increment() {
        setQuantity(quantity + 1);
        handleRemoveFromCart()
    }

    function decrement() {
        if (quantity === 1) {
            return
        }
        setQuantity(quantity - 1);
        handleRemoveFromCart()
    }

    let vatCount = ((price * vat / 100) * quantity).toFixed(2);
    let total = ((parseFloat(price) * quantity) + parseFloat(vatCount)).toFixed(2);

    const foodAddedToCart = {
        _id, category, name, quantity, vat, vatCount, price, total, photo
    }

    const handleAddToCart = () => {
        if (typeof window !== 'undefined') {
            const existingSelectedFood = JSON.parse(localStorage.getItem('selectedFood')) || [];
            localStorage.setItem('selectedFood', JSON.stringify([...existingSelectedFood, foodAddedToCart]));
            setCartItems([...existingSelectedFood, foodAddedToCart]);
            setIsAddedToCart(true)
        }
    }

    const handleRemoveFromCart = () => {
        if (typeof window !== 'undefined') {
            const existingSelectedFood = JSON.parse(localStorage.getItem('selectedFood')) || [];
            const updatedSelectedFood = existingSelectedFood.filter(item => item._id !== _id);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFood));
            setCartItems(updatedSelectedFood)
            setIsAddedToCart(false)
        }
    };

    const itemFromCart = cartItems?.filter(cartItem => cartItem._id === _id);

    return (
        <section>
            <div className="card rounded-lg border border-custom-500 hover:border-gray-200 shadow shadow-gray-200 bg-transparent text-gray-200">

                <figure>
                    <Image
                        src={photo}
                        alt="food"
                        width={190}
                        height={92}
                        className="h-32 lg:h-44 w-full rounded-t-md mb-3 lg:mb-4 hover:scale-125"
                    />
                </figure>

                <div className="font-semibold ml-3 md:mx-4 lg:mx-7">

                    <h2 className="mb-1 md:mb-0.5 lg:mb-0.5 text-sm md:text-base lg:text-base">Category: {category}</h2>
                    <h2 className="mb-1 md:mb-0.5 lg:mb-0.5 text-xs md:text-sm lg:text-base">Name: {name}</h2>
                    <h2 className="mb-1 md:mb-0.5 lg:mb-0.5 text-xs md:text-sm lg:text-base">Price: ${price} + VAT ({vat}%)</h2>

                    <h2 className="mb-1 text-xs md:text-sm lg:text-base">
                        Quantity:
                        <span
                            onClick={decrement}
                            className='cursor-pointer font-bold border px-1 lg:px-1.5 lg:pb-1 ml-2 lg:ml-3 mr-1'
                        >-</span>

                        <span className='px-2'>{(isAddedToCart) ? itemFromCart[0]?.quantity : quantity}</span>

                        <span
                            onClick={increment}
                            className='cursor-pointer font-bold border px-1 lg:pb-1 ml-1'
                        >+</span>
                    </h2>

                    <h2 className="mb-1 md:mb-0.5 lg:mb-0.5 text-xs md:text-sm lg:text-base">Total: ${isAddedToCart ? itemFromCart[0].total : total}</h2>

                </div>

                <div className="flex justify-between my-4 mx-2 md:mx-6 lg:mx-0">
                    {/* if item is not added to cart */}
                    {
                        (!isAddedToCart)
                        &&
                        <button
                            className="rounded-md px-2 text-gray-200 font-semibold btn-xs bg-custom-500 hover:bg-transparent hover:text-custom-500 hover:border hover:border-custom-500 shadow shadow-gray-200 mx-auto"
                            onClick={handleAddToCart}
                        >Add to Cart</button>
                    }

                    {/* if item is added to cart */}
                    {
                        (isAddedToCart)
                        &&
                        <>
                            <button
                                className="rounded-md px-2 text-custom-500 hover:text-gray-200 font-semibold btn-xs bg-transparent border border-custom-500 hover:bg-custom-500 mx-auto shadow shadow-gray-200"
                                onClick={() => router.push('/cart')}
                            >Go to Cart</button>

                            <button
                                className="rounded-md px-2.5 text-custom-500 hover:text-gray-200 font-semibold btn-xs border border-custom-500 hover:bg-custom-500 mx-auto shadow shadow-gray-200"
                                onClick={handleRemoveFromCart}
                            >Remove</button>
                        </>
                    }

                </div>
            </div>
        </section>
    )
}

export default Food