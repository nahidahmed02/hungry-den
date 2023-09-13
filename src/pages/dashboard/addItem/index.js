import AdminRoute from '@/src/PrivateRoute/AdminRoute'
import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import AddItem from '@/src/components/Dashboard/AddItem/AddItem'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const addItem = () => {
    return (
        <PrivateRoute>
            <AdminRoute>
                <Layout>
                    <DashboardLayout>
                        <AddItem></AddItem>
                    </DashboardLayout>
                </Layout>
            </AdminRoute>
        </PrivateRoute>
    )
}

export default addItem