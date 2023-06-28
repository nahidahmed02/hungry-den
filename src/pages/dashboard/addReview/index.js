import AddReview from '@/src/components/Dashboard/AddReview/AddReview'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const addReview = () => {
    return (
        <Layout>
            <DashboardLayout>
                <AddReview></AddReview>
            </DashboardLayout>
        </Layout>
    )
}

export default addReview