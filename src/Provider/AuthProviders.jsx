import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';




export const AuthContext = createContext();
const auth = getAuth(app)
const googleProbider = new GoogleAuthProvider;
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)



    /// creat a user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // login user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google SignIn

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProbider)
    }







    // checack user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            return unsubscribe
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;