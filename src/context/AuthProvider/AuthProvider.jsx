import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
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


    // Logout
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }




    // google login
    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider)
    }
 




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change', currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        loading,
        createUser,
        signInUser,
        user,
        signOutUser,
        signInWithGoogle
        
    }
    return (

     <AuthContext value={authInfo}>{children}</AuthContext>
    );
};

export default AuthProvider;