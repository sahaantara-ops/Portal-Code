import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth ,onAuthStateChanged,unsubscribe} from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)};
      console.log(user);
      useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
      },[]);
    const authInfo = {
        user,
        setUser,
        createUser
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;