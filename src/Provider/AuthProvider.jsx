import React, { useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import app from '../firebase/firebase.config';
import AuthContext from "./AuthContext";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    console.log(user);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout
    const logOut = () => {
        return signOut(auth);
    };

    // Observer
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };

    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;