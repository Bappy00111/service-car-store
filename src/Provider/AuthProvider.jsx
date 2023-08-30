import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/congife.firebase';

export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loddding, setLodding] = useState(true)

    const createUser = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLodding(false)

        });
        return()=>{
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loddding,
        createUser,
        singIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;