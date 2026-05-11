import React, { useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
   GithubAuthProvider,
   sendPasswordResetEmail
} from "firebase/auth";

import app from '../firebase/firebase.config';
import AuthContext from './authContext';

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
}

    // Logout
    const logOut = () => {
        return signOut(auth);
    }
    // Reset Password
    const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logOut,
        resetPassword
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;