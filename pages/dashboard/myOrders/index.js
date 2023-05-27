import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import MyOrders from '@/components/Dashboard/MyOrders'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const myOrders = () => {
    return (
        <Layout>
            <DashboardLayout>
                <MyOrders></MyOrders>
            </DashboardLayout>
        </Layout>
    )
}

export default myOrders