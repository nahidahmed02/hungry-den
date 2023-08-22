import PrivateRoute from '@/src/PrivateRoute/PrivateRoute';
import Layout from '@/src/components/Layout/Layout';
import Card from '@/src/components/Payment/Card';
import React from 'react';

const card = () => {
    return (
        <PrivateRoute>
            <Layout>
                <Card></Card>
            </Layout>
        </PrivateRoute>
    );
};

export default card;