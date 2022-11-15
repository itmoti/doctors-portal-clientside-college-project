import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const UserContext = createContext();


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

        updateProfile(auth.currentUser ,information )
    }
    // observer
    useEffect(() => {
          const unsubscribe =    onAuthStateChanged(auth , currentUser => {
              setUser(currentUser)
              setLoading(false)
             })
            return () => unsubscribe()
    },[])
    const authInfo = {signup ,signIn , user , logOut  , updateFullProfile , loading}
    return (
        <UserContext.Provider value={authInfo}>
           {children}
        </UserContext.Provider >
    );
};

export default AuthContext;