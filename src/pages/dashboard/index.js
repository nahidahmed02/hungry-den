// import DashboardLayout from '@/components/Dashboard/DashboardLayout'
// import Profile from '@/components/Dashboard/Profile'
// import Layout from '@/components/Layout/Layout'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import Profile from '@/src/components/Dashboard/Profile'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const dashboard = () => {
    return (
        <Layout>
            <DashboardLayout>
                <Profile></Profile>
            </DashboardLayout>
        </Layout>
    )
}

export default dashboard