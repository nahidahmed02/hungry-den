import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const location = useRouter();
    // const { query } = location;
    // console.log(query);

    useEffect(() => {
        if (!user) {
            location.push('/login');
        }
    }, [user, location]);

    // if (user) {
    //     return children;
    // }

    // return <Link href='/login' state={{ from: location }} replace></Link>;
    return user ? children : null;

};

export default PrivateRoute;