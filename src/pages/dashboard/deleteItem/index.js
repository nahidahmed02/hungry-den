import AdminRoute from '@/src/PrivateRoute/AdminRoute'
import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import DeleteItem from '@/src/components/Dashboard/DeleteItem/DeleteItem'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const deteteItem = () => {
    return (
        <PrivateRoute>
            <AdminRoute>
                <Layout>
                    <DashboardLayout>
                        <DeleteItem></DeleteItem>
                    </DashboardLayout>
                </Layout>
            </AdminRoute>
        </PrivateRoute>

    )
}

export default deteteItem