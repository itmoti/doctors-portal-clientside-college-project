import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const UserContext = createContext();
const googleProvider = new GoogleAuthProvider() 

const AuthContext = ({ children }) => {
    const [loading , setLoading] = useState(true)
    const auth = getAuth(app)
    const [user , setUser] = useState('')
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signIn = (email , password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }
    const logOut = () => {
        setLoading(true)

        return signOut(auth)
    }
    const updateFullProfile = (information) => {
        setLoading(true)

      return  updateProfile(auth.currentUser ,information )
    }
    const passwordReset = ( email) => {
        return sendPasswordResetEmail(auth , email)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth , googleProvider)
    }
    // observer
    useEffect(() => {
          const unsubscribe =    onAuthStateChanged(auth , currentUser => {
              setUser(currentUser)
              setLoading(false)
             })
            return () => unsubscribe()
    },[])
    const authInfo = {signup ,signIn , user , logOut  , googleSignIn,updateFullProfile , loading , passwordReset}
    return (
        <UserContext.Provider value={authInfo}>
           {children}
        </UserContext.Provider >
    );
};

export default AuthContext;