import DashboardLayout from '@/src/components/Dashboard/DashboardLayout'
import DeleteItem from '@/src/components/Dashboard/DeleteItem'
import Layout from '@/src/components/Layout/Layout'
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