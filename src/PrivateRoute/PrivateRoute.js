import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useRouter();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        location.push('/login');
    }

    // return <Link href='/login' state={{ from: location }} replace></Link>;
    return user ? children : null;

};

export default PrivateRoute;