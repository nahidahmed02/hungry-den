import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import ManageUsers from '@/src/components/Dashboard/ManageUsers/ManageUsers'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const manageUsers = () => {
    return (
        <PrivateRoute>
            <Layout>
                <DashboardLayout>
                    <ManageUsers></ManageUsers>
                </DashboardLayout>
            </Layout>
        </PrivateRoute>
    )
}

export default manageUsers