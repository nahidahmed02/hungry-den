import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import MyOrders from '@/src/components/Dashboard/MyOrders/MyOrders'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const myOrders = () => {
    return (
        <PrivateRoute>
            <Layout>
                <DashboardLayout>
                    <MyOrders></MyOrders>
                </DashboardLayout>
            </Layout>
        </PrivateRoute>
    )
}

export default myOrders