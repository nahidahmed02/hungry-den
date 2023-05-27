import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import DeleteItem from '@/components/Dashboard/DeleteItem'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const deteteItem = () => {
    return (
        <Layout>
            <DashboardLayout>
                <DeleteItem></DeleteItem>
            </DashboardLayout>
        </Layout>

    )
}

export default deteteItem