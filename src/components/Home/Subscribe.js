import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Subscribe = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribe = event => {
        event.preventDefault();
        setEmail('');
        toast.success('Successfully Subscribe!')

    }

    return (
        <section className='mb-10'>

            <h2 className='border-b-2 border-b-gray-200 mt-24 -mb-20 mx-9 md:mx-24 lg:mx-72'></h2>
            <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-gray-200 bg-black'>Subscribe Now</h2>

            <div className='flex flex-col md:flex-row lg:flex-row lg:justify-center mx-4 md:mx-28 lg:mx-64 px-5 md:px-6 lg:px-7 py-5 md:py-6 lg:py-4 rounded-lg border border-yellow-400 shadow shadow-white'>

                <div className=''>
                    <h2 className='text-xl font-semibold mb-1 text-gray-200'>Don&rsquo;t miss out!</h2>
                    <p className='text-gray-200'>Stay updated with our latest menu additions, special offers, and events by email.</p>
                </div>

                <div className='md:ml-6 lg:ml-12 mt-4 md:my-auto lg:my-auto '>
                    <form className="flex flex-col md:flex-row lg:flex-row">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Your Email Address"
                            className="bg-transparent border border-yellow-400 text-orange-300 shadow shadow-white rounded-lg py-2 px-4"
                            required
                        />

                        <button
                            type="submit"
                            onClick={handleSubscribe}
                            className="w-1/3 md:w-full lg:w-full px-4 py-2 md:ml-2 lg:ml-2 mt-3 md:mt-0 lg:mt-0 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
                        >Subscribe</button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Subscribe;