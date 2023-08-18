import { AuthContext } from '@/src/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import useToken from '@/src/hooks/useToken';

const SignUp = () => {
    const {
        user,
        createUserWithEmailPassword,
        updateUser,
        signInWithGoogle,
        signInWithFacebook,
        showPassword,
        togglePasswordView
    } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const router = useRouter();


    if (token) {
        router.push('/');
    }


    const saveUser = (name, email) => {
        const role = 'user';
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, role })
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)
            })
    }


    const handleSignUp = async (data) => {
        setSignUpError('');

        try {
            const { user } = await createUserWithEmailPassword(data.email, data.password)
            const userInfo = {
                displayName: data.name
            }

            await updateUser(user, userInfo)
                .then(() => {
                    saveUser(data.name, data.email)
                })

            toast.success('Welcome to Friends Kebab');

        } catch (error) {
            console.log(error);
            setSignUpError(error.message)
        };
    }


    const handleGoogleSignUp = () => {
        setSignUpError('')

        signInWithGoogle()
            .then(result => {
                saveUser(result.user.displayName, result.user.email);
                toast.success('Welcome to Friends Kebab')
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }


    const handleFacebookSignUp = () => {
        setSignUpError('')

        signInWithFacebook()
            .then(result => {
                saveUser(result.user.displayName, result.user.email);
                toast.success('Welcome back to Friends Kebab')
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }

    return (
        <div className='pt-28 h-screen'>
            <div className='lg:flex lg:justify-center'>

                <div className='lg:w-96'>
                    <h2 className='text-orange-500 font-serif text-center text-xl font-bold lg:pt-20 mb-4'>Create an Account</h2>

                    <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col w-96 mx-auto mb-4'>

                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Name"
                            className="input input-bordered bg-transparent shadow shadow-white text-orange-300 border-yellow-400 w-full max-w-xs mx-auto mb-3"
                            required
                        />
                        {errors.name && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.name?.message}</p>}

                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered bg-transparent shadow shadow-white text-orange-300 border-yellow-400 w-full max-w-xs mx-auto mb-3"
                            required
                        />
                        {errors.email && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.email?.message}</p>}

                        <input
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 digits" } })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered bg-transparent shadow shadow-white text-orange-300 border-yellow-400 w-full max-w-xs mx-auto mb-3"
                            required
                        />
                        <button type='button' onClick={togglePasswordView} className='w-fit pl-5 -mt-11 ml-72 mb-7 text-xs text-gray-300 bg-black'>{showPassword ? 'Hide' : 'Show'}</button>

                        {errors.password && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.password?.message}</p>}

                        <button
                            type="submit"
                            className="bg-orange-500 text-white shadow shadow-white hover:rounded-2xl font-bold w-full max-w-xs mx-auto py-2 rounded-md">

                            Sign Up
                        </button>

                        {signUpError && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{signUpError}</p>}

                    </form>

                    <p className='text-center text-white text-sm mb-4'>Already have an account?
                        <span className='ml-2 text-blue-400 underline font-semibold'>
                            <Link href='/login' className='italic'>Login</Link>
                        </span>
                    </p>
                </div>

                <div className='divider mx-auto lg:mx-0 w-80 lg:w-52 text-xs lg:rotate-90 lg:mt-56 text-white'>OR</div>

                <div className='lg:mt-36 lg:w-96'>
                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 rounded-md hover:rounded-2xl"
                            onClick={() => handleGoogleSignUp()}
                        >
                            <FcGoogle className='text-xl mr-5' />
                            Continue With Google
                        </button>
                    </div>

                    <div className='text-center'>
                        <button
                            type="submit"
                            className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 rounded-md hover:rounded-2xl"
                            onClick={() => handleFacebookSignUp()}
                        >
                            <BsFacebook className='text-xl mr-5 text-blue-500' />
                            Continue With Facebook
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp