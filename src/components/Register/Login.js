import { AuthContext } from '@/src/context/AuthProvider';
import useToken from '@/src/hooks/useToken';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

    const {
        user,
        signInWithEmailPassword,
        signInWithGoogle,
        signInWithFacebook,
        forgotPassword,
        showPassword,
        togglePasswordView
    } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const router = useRouter();
    const from = router?.query?.from || '/';

    useEffect(() => {
        if (token) {
            router.push(from);
        }
    }, [token, from, router])

    const handleForgotPassword = () => {
        forgotPassword(email)
            .then(result => {
                toast.success('Email Sent')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleLogin = data => {
        setLoginError('');

        signInWithEmailPassword(data.email, data.password)
            .then(result => {
                toast.success('Welcome back to Friends Kebab')
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        setLoginError('')

        signInWithGoogle()
            .then(result => {
                setLoginUserEmail(result.user.email);
                toast.success('Welcome back to Friends Kebab')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    const handleFacebookLogin = () => {
        setLoginError('')

        signInWithFacebook()
            .then(result => {
                setLoginUserEmail(result.user.email);
                toast.success('Welcome back to Friends Kebab')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    return (
        <section className='h-screen'>
            <div className='lg:flex lg:justify-center'>

                <div className='lg:w-96'>
                    <h2 className='text-orange-500 font-serif text-center text-xl font-bold pt-28 lg:pt-48 mb-4 '>Login to your Account</h2>

                    <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col w-96 mx-auto mb-4'>

                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                        {errors.email && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.email?.message}</p>}

                        <input
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 digits" } })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                            required
                        />
                        <button type='button' onClick={togglePasswordView} className='w-fit pl-5 -mt-10 ml-72 mb-6 text-xs text-gray-400 bg-white'>{showPassword ? 'Hide' : 'Show'}</button>
                        <button type='button' onClick={handleForgotPassword} className='w-fit ml-64 -mt-2 mb-2 text-xs text-red-600'>Forgot Password?</button>

                        {errors.password && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.password?.message}</p>}

                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-bold w-full max-w-xs mx-auto py-2 rounded-md">

                            Login
                        </button>

                        {loginError && <p className='text-red-500 ml-10 pr-5 mb-2.5 font-semibold'>{loginError}</p>}

                    </form>

                    <p className='text-center text-sm mb-4'>Don&#39;t have an account?
                        <span className='ml-2 text-blue-400 underline font-semibold'>
                            <Link href='/signup' className='italic'>Create an account</Link>
                        </span>
                    </p>
                </div>

                <div className='divider mx-auto lg:mx-0 w-80 lg:w-52 text-xs lg:rotate-90 lg:mt-80'>OR</div>

                <div className='lg:mt-64 lg:w-96'>
                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 rounded-md"
                            onClick={() => handleGoogleLogIn()}
                        >
                            <FcGoogle className='text-xl mr-5' />
                            Continue With Google
                        </button>
                    </div>

                    <div className='text-center'>
                        <button
                            type="submit"
                            className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 rounded-md"
                            onClick={() => handleFacebookLogin()}
                        >
                            <BsFacebook className='text-xl mr-5 text-blue-500' />
                            Continue With Facebook
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Login