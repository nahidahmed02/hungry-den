import { useEffect, useState } from "react";

const useDMan = (user) => {
    const [dMan, setDMan] = useState(false);
    const [dManLoading, setDManLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;

        if (email) {
            fetch(`https://hungry-den-server.onrender.com/dman/${email}`)
                .then(res => res.json())
                .then(data => {
                    setDMan(data.dMan);
                    setDManLoading(false)
                })
        }
    }, [user])

    return [dMan, dManLoading];
};

export default useDMan;