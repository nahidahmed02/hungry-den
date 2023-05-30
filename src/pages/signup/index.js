// import Layout from '@/components/Layout/Layout'
// import SignUp from '@/components/Register/SignUp'
import Layout from '@/src/components/Layout/Layout'
import SignUp from '@/src/components/Register/SignUp'
import Link from 'next/link'
import React from 'react'

const signup = () => {
    return (
        <Layout>
            <SignUp></SignUp>
        </Layout>
    )
}

export default signup