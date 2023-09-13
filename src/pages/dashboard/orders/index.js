import AdminRoute from '@/src/PrivateRoute/AdminRoute'
import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Orders from '@/src/components/Dashboard/Orders/Orders'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const orders = () => {
    return (
        <PrivateRoute>
            <AdminRoute>
                <Layout>
                    <DashboardLayout>
                        <Orders></Orders>
                    </DashboardLayout>
                </Layout>
            </AdminRoute>
        </PrivateRoute>
    )
}

export default orders