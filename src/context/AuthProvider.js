import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const createUserWithEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUserWithEmailPassword,
        signInWithEmailPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;