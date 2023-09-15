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
                toast.success('Welcome back to Hungry Den')
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
                toast.success('Welcome back to Hungry Den')
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
                toast.success('Welcome back to Hungry Den')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    return (
        <section className='pt-24 h-screen'>
            <div className='lg:flex lg:justify-center'>

                <div className='lg:w-96'>
                    <h2 className='border-b-2 border-b-orange-500 mt-8 -mb-20 mx-16 md:mx-24 lg:mx-16'></h2>
                    <h2 className='header-font text-4xl w-fit mx-auto px-3 md:px-5 lg:px-5 mt-14 mb-10 text-orange-500 bg-black'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col w-96 mx-auto mb-4'>

                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            placeholder="Email"
                            onChange={event => setEmail(event.target.value)}
                            className="input input-bordered text-yellow-500 border-yellow-500 shadow shadow-gray-200 bg-transparent w-full max-w-xs mx-auto mb-3"
                            required
                        />
                        {errors.email && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.email?.message}</p>}

                        <input
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 digits" } })}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered text-yellow-500 border-yellow-500 shadow shadow-gray-200 bg-transparent w-full max-w-xs mx-auto mb-3"
                            required
                        />
                        <button type='button' onClick={togglePasswordView} className='w-fit pl-5 -mt-11 ml-72 mb-6 text-xs text-gray-200 bg-black'>{showPassword ? 'Hide' : 'Show'}</button>
                        <button type='button' onClick={handleForgotPassword} className='w-fit ml-64 -mt-1 mb-2 text-xs text-gray-200'>Forgot Password?</button>

                        {errors.password && <p className='text-yellow-500 ml-10 mb-2.5 font-semibold'>{errors.password?.message}</p>}

                        <button
                            type="submit"
                            className="bg-orange-500 text-gray-200 shadow shadow-gray-200 font-semibold w-full max-w-xs mx-auto py-2 rounded-md hover:rounded-2xl">

                            Login
                        </button>

                        {loginError && <p className='text-yellow-500 ml-10 pr-5 my-1 font-semibold'>{loginError}</p>}

                    </form>

                    <p className='text-center text-sm mb-4 text-gray-200'>Don&#39;t have an account?
                        <span className='ml-2 text-yellow-500 hover:text-yellow-400 font-semibold'>
                            <Link href='/signup' className='italic'>Create an account</Link>
                        </span>
                    </p>
                </div>

                <div className='divider mx-auto lg:mx-0 w-80 lg:w-52 text-sm font-semibold lg:rotate-90 lg:mt-56 text-gray-200'>OR</div>

                <div className='lg:mt-36 lg:w-96'>
                    <div className='text-center mt-4'>
                        <button
                            type="submit"
                            className="btn border border-yellow-500 hover:border-green-600 hover:text-green-600 text-orange-500 bg-transparent hover:bg-transparent shadow shadow-gray-200 font-semibold w-full max-w-xs mb-3 rounded-md hover:rounded-2xl"
                            onClick={() => handleGoogleLogIn()}
                        >
                            <FcGoogle className='text-xl mr-6' />
                            Continue With Google
                        </button>
                    </div>

                    <div className='text-center'>
                        <button
                            type="submit"
                            className="btn border border-yellow-500 hover:border-blue-400 hover:text-blue-400 text-orange-500 bg-transparent hover:bg-transparent shadow shadow-gray-200 font-semibold w-full max-w-xs mb-3 rounded-md hover:rounded-2xl"
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