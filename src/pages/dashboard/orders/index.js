import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Orders from '@/src/components/Dashboard/Orders'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const orders = () => {
    return (
        <Layout>
            <DashboardLayout>
                <Orders></Orders>
            </DashboardLayout>
        </Layout>
    )
}

export default orders