import { AuthContext } from '@/src/context/AuthProvider';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

    const { user, signInWithEmailPassword, signInWithGoogle, forgotPassword, showPassword, togglePasswordView } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');

    const router = useRouter();
    const from = router?.query?.from || '/';

    useEffect(() => {
        if (user) {
            router.push(from);
        }
    }, [user, from, router])

    const handleLogin = data => {
        setLoginError('');

        signInWithEmailPassword(data.email, data.password)
            .then(result => {
                toast.success('Welcome back to Friends Kebab')
                const user = result.user;
                console.log(user);
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
                console.log(result);
                toast.success('Welcome back to Friends Kebab')
            })
            .catch(error => {
                console.log(error)
                setLoginError(error.message)
            })
    }

    return (
        <section className='w-96 mx-auto mt-28 mb-20'>
            <h2 className='text-orange-500 font-serif text-center text-xl font-bold mb-4'>Login to your Account</h2>

            <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col '>

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
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs mx-auto mb-2.5"
                    required
                />
                <button type='button' onClick={togglePasswordView} className='-mt-10 ml-64 mb-6 text-xs'>{showPassword ? 'Hide' : 'Show'}</button>
                <button type='button' onClick={forgotPassword} className='ml-52 -mt-2 mb-2 text-xs text-red-600'>Forgot Password?</button>

                {errors.password && <p className='text-red-500 ml-10 mb-2.5 font-semibold'>{errors.password?.message}</p>}

                <button
                    type="submit"
                    className="bg-orange-400 text-white font-bold w-full max-w-xs mx-auto mb-3 py-2 rounded-md">

                    Login
                </button>

                {loginError && <p className='text-red-500 ml-10 pr-5 mb-2.5 font-semibold'>{loginError}</p>}

            </form>

            <p className='text-center mb-6'>Don&#39;t have an account?
                <span className='ml-2 text-blue-400 underline font-semibold'>
                    <Link href='/signup'>Create an account</Link>
                </span>
            </p>

            <div className='divider mx-11'>OR</div>

            <div className='text-center mt-6'>
                <button
                    type="submit"
                    className="btn hover:bg-gray-200 bg-white text-green-600 border border-green-600 hover:border-green-600 font-bold w-full max-w-xs mb-3 py-2 rounded-md"
                    onClick={() => handleGoogleLogIn()}
                >
                    <FcGoogle className='text-xl mr-5' />
                    Continue With Google
                </button>
            </div>

        </section>
    )
}

export default Login