import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider(auth);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const updateUser = userInfo => {
        return updateProfile(user, userInfo)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe()
    }, [])

    const authInfo = {
        createUserWithEmailPassword,
        signInWithEmailPassword,
        signInWithGoogle,
        updateUser,
        logout,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;