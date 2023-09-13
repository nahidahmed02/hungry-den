import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useDMan from '../hooks/useDMan';
import { useRouter } from 'next/router';
import Loading from '../components/Loading/Loading';

const DManRoute = ({ children }) => {

    const { user, loading, logout } = useContext(AuthContext);
    const [dMan, dManLoading] = useDMan(user);
    const router = useRouter();

    if (loading || dManLoading) {
        return <Loading></Loading>
    }

    if (!user || !dMan) {
        logout();
        router.replace({
            pathname: '/login',
            query: {
                from: router.asPath
            }
        })
    }

    return children;
};

export default DManRoute;