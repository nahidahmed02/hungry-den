import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <section className='mt-24'>
            <p>Login</p>
            <br />
            <Link href='/signup'>Sign Up</Link>
        </section>
    )
}

export default Login