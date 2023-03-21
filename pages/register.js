import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import React from 'react'

const register = () => {
    return (
        <Layout>
            <div>register
                <br />
                Or,
                <br />
                <Link href="/login">Login</Link>
            </div>
        </Layout>
    )
}

export default register