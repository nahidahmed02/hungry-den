import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <section className='mt-28 mb-20'>
            <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Login to your Account</h2>

            <form className='flex flex-col'>

                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs mx-auto mb-4"
                    required
                />

                <button
                    type="submit"
                    className="bg-orange-400 text-white font-bold w-full max-w-xs mx-auto mb-3 py-2 rounded-md">

                    Login
                </button>

            </form>

            <p className='text-center mb-6'>Don&#39;t have an account?
                <span className='ml-2 text-blue-400 underline font-semibold'>
                    <Link href='/signup'>Create an account</Link>
                </span>
            </p>

            <div className='divider w-1/4 mx-auto'>OR</div>

            <div className='text-center mt-6'>
                <button
                    type="submit"
                    className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 py-2 rounded-md">
                    <FcGoogle className='text-xl mr-5' />
                    Continue With Google
                </button>
            </div>

        </section>
    )
}

export default Login