import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import Orders from '@/components/Dashboard/Orders'
import Layout from '@/components/Layout/Layout'
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