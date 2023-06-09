import React from 'react';
import Layout from '../components/Layout/Layout';
import PaymentOpts from '../components/Payment/PaymentOpts';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const paymentOpt = () => {
    return (
        <PrivateRoute>
            <Layout>
                <PaymentOpts></PaymentOpts>
            </Layout>
        </PrivateRoute>
    );
};

export default paymentOpt;