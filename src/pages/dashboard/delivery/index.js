import DManRoute from '@/src/PrivateRoute/DManRoute';
import PrivateRoute from '@/src/PrivateRoute/PrivateRoute';
import DashboardLayout from '@/src/components/Dashboard/DashboardLayout';
import Delivery from '@/src/components/Dashboard/Delivery/Delivery';
import Layout from '@/src/components/Layout/Layout';
import React from 'react';

const delivery = () => {
    return (
        <PrivateRoute>
            <DManRoute>
                <Layout>
                    <DashboardLayout>
                        <Delivery></Delivery>
                    </DashboardLayout>
                </Layout>
            </DManRoute>
        </PrivateRoute>
    );
};

export default delivery;