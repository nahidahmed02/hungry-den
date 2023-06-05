import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing');
            setUser(currentUser)
        })

        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUserWithEmailPassword,
        signInWithEmailPassword,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;