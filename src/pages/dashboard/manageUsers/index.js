// import DashboardLayout from '@/components/Dashboard/DashboardLayout'
// import ManageUsers from '@/components/Dashboard/ManageUsers'
// import Layout from '@/components/Layout/Layout'
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import ManageUsers from '@/src/components/Dashboard/ManageUsers'
import Layout from '@/src/components/Layout/Layout'
import React from 'react'

const manageUsers = () => {
    return (
        <Layout>
            <DashboardLayout>
                <ManageUsers></ManageUsers>
            </DashboardLayout>
        </Layout>
    )
}

export default manageUsers