import AddItem from '@/components/Dashboard/AddItem'
import DashboardLayout from '@/components/Dashboard/DashboardLayout'
import Layout from '@/components/Layout/Layout'
import React from 'react'

const addItem = () => {
    return (
        <Layout>

            <DashboardLayout>
                <AddItem></AddItem>
            </DashboardLayout>

        </Layout>
    )
}

export default addItem