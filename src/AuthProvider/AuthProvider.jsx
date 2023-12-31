import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase.config";

export const AuthContext= createContext(null)
const auth= getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const createUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login= (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut= ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('currrent user is:', currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    
    },[])
    const AuthInfo= {
        user,
        loading,
        createUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;