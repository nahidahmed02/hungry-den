import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Food = ({ food }) => {
    const router = useRouter();
    const { id, category, name, price, vat, photo } = food;

    let [quantity, setQuantity] = useState(1);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const existingSelectedFood = JSON.parse(localStorage.getItem('selectedFood')) || [];
        setCartItems(existingSelectedFood);
        setIsAddedToCart(existingSelectedFood.some((item) => item.id === id));
    }, [id]);

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
        id, category, name, quantity, vat, vatCount, price, total, photo
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
            const updatedSelectedFood = existingSelectedFood.filter(item => item.id !== id);
            localStorage.setItem('selectedFood', JSON.stringify(updatedSelectedFood));
            setCartItems(updatedSelectedFood)
            setIsAddedToCart(false)
        }
    };

    const itemFromCart = cartItems?.filter(cartItem => cartItem.id === id);

    return (
        <section>
            <div className="card bg-slate-200 shadow-xl">

                <figure>
                    <Image src={photo} alt="food" width={192} height={95} className="rounded-t-md mt-5 lg:mt-7 mb-3 lg:mb-4 px-4 lg:px-0" />
                </figure>

                <div className="text-sm mx-4 md:mx-8 lg:mx-8">

                    <h2 className="mb-0.5">Category: {category}</h2>
                    <h2 className="mb-0.5">Name: {name}</h2>
                    <h2 className="mb-0.5">Price: ${price} + vat({vat}%)</h2>

                    <h2 className="mb-0.5">Quantity:
                        <span onClick={decrement} className='cursor-pointer font-bold bg-slate-300 px-1 lg:px-1.5 lg:pb-1 ml-2 lg:ml-3 mr-1'>-</span>
                        <span className='px-2'>{(isAddedToCart) ? itemFromCart[0]?.quantity : quantity}</span>
                        <span onClick={increment} className='cursor-pointer font-bold bg-slate-300 px-1 lg:pb-1 ml-1'>+</span>
                    </h2>

                    <h2 className="mb-0.5">Total: ${isAddedToCart ? itemFromCart[0].total : total}</h2>

                </div>

                <div className="card-actions my-4 mx-5">

                    {(!isAddedToCart) && <button className="rounded-lg px-2 text-white font-bold btn-xs bg-green-600 mx-auto"
                        onClick={handleAddToCart}
                    >Add to Cart</button>}

                    {(isAddedToCart) && <>
                        <button className="rounded-lg px-2 text-white font-bold btn-xs bg-orange-500 mx-auto"
                            onClick={() => router.push('/cart')}
                        >Go to Cart</button>
                        <button className="rounded-lg px-2 text-white font-bold btn-xs bg-red-600 mx-auto"
                            onClick={handleRemoveFromCart}
                        >Remove From Cart</button>
                    </>}

                </div>
            </div>
        </section>
    )
}

export default Food