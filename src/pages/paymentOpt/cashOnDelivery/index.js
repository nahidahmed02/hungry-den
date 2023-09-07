import PrivateRoute from '@/src/PrivateRoute/PrivateRoute';
import Layout from '@/src/components/Layout/Layout';
import CashOnDelivery from '@/src/components/Payment/CashOnDelivery/CashOnDelivery';
import React from 'react';

const cashOnDelivery = () => {
    return (
        <PrivateRoute>
            <Layout>
                <CashOnDelivery></CashOnDelivery>
            </Layout>
        </PrivateRoute>
    );
};

export default cashOnDelivery;