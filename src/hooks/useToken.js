import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                const accessToken = data.accessToken;
                if (accessToken) {
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                }
            })
    }, [email])

    return [token];
};

export default useToken;