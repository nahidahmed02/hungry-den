import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <Layout>
            <div className='mt-24'>login
                <br />
                Or,
                <br />
                <Link href="/register">Register Now</Link>
            </div>
        </Layout>

    )
}

export default login