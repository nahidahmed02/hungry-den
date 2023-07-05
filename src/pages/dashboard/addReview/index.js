import PrivateRoute from '@/src/PrivateRoute/PrivateRoute'
import AddReview from '@/src/components/Dashboard/AddReview/AddReview'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const addReview = () => {
    return (
        <PrivateRoute>
            <Layout>
                <DashboardLayout>
                    <AddReview></AddReview>
                </DashboardLayout>
            </Layout>
        </PrivateRoute>
    )
}

export default addReview