import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { useRouter } from 'next/router';
import Loading from '../components/Loading/Loading';

const AdminRoute = ({ children }) => {

    const { user, loading, logout } = useContext(AuthContext);
    const [admin, adminLoading] = useAdmin(user);
    const router = useRouter();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
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

export default AdminRoute;