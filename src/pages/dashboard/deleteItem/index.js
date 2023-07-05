import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import DeleteItem from '@/src/components/Dashboard/DeleteItem/DeleteItem'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const deteteItem = () => {
    return (
        <PrivateRoute>
            <Layout>
                <DashboardLayout>
                    <DeleteItem></DeleteItem>
                </DashboardLayout>
            </Layout>
        </PrivateRoute>

    )
}

export default deteteItem