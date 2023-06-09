import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useRouter();

    useEffect(() => {
        if (!user) {
            location.push('/login');

        }
    }, [user, location]);


    // return <Link href='/login' state={{ from: location }} replace></Link>;
    return user ? children : null;

};

export default PrivateRoute;