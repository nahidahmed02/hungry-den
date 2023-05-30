// import AddReview from '@/components/Dashboard/AddReview'
// import DashboardLayout from '@/components/Dashboard/DashboardLayout'
// import Layout from '@/components/Layout/Layout'
import AddReview from '@/src/components/Dashboard/AddReview'
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