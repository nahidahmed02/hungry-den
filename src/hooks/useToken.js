import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useToken = email => {
    const { user } = useContext(AuthContext)
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`https://hungry-den-server.onrender.com/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    if (accessToken) {
                        localStorage.setItem('accessToken', accessToken)
                        setToken(accessToken)
                    }
                })
        }
    }, [email, user])

    return [token];
};

export default useToken;