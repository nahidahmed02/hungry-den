import PrivateRoute from '@/src/PrivateRoute/PrivateRoute';
import Layout from '@/src/components/Layout/Layout';
import PayOnline from '@/src/components/Payment/PayOnline';
import React from 'react';

const payOnline = () => {
    return (
        <PrivateRoute>
            <Layout>
                <PayOnline></PayOnline>
            </Layout>
        </PrivateRoute>
    );
};

export default payOnline;