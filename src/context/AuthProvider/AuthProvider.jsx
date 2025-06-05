import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    const [loading, setLoading] =useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword (auth, email, password)
    }

    // google login
    





    const authInfo = {
        loading,
        createUser,
        signInUser
        
    }
    return (

     <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;