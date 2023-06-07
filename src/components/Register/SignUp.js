import { AuthContext } from '@/src/context/AuthProvider';
import Link from 'next/link'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'

const SignUp = () => {
    const { createUserWithEmailPassword } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = data => {
        console.log(data);
        createUserWithEmailPassword(data.email, data.password)
            .then(result => {
                toast.success('Welcome to Friends Kebab');
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='w-96 mx-auto mt-28 mb-8'>
            <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Create an Account</h2>

            <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col'>

                <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.name && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.name?.message}</p>}

                <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.email && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.email?.message}</p>}

                <input
                    {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 digits" } })}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                {errors.password && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.password?.message}</p>}

                <button
                    type="submit"
                    className="bg-orange-400 text-white font-bold w-full max-w-xs mx-auto mb-3 py-2 rounded-md">

                    Sign Up
                </button>

            </form>

            <p className='text-center mb-6'>Already have an account?
                <span className='ml-2 text-blue-400 underline font-semibold'>
                    <Link href='/login'>Login</Link>
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

        </div>
    )
}

export default SignUp