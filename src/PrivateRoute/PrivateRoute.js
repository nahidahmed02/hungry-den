import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        router.replace({
            pathname: '/login',
            query: { from: router.asPath }
        })
    }

    return children;
};

export default PrivateRoute;