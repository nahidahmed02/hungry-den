import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Profile from '@/src/components/Dashboard/Profile/Profile'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const dashboard = () => {
    return (
        <PrivateRoute>
            <Layout>
                <DashboardLayout>
                    <Profile></Profile>
                </DashboardLayout>
            </Layout>
        </PrivateRoute>
    )
}

export default dashboard