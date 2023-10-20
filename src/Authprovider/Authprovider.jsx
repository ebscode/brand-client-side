import {  createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";


export const authcontext=createContext(null)
const Authprovide = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
 

    const createuser=(email,password)=>{
        setloading(true)
        
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth ,currentuser=>{
            
            setuser(currentuser)
            setloading(false)
           
        })

        return ()=>{
            unsubscribe()
        }
    },[])
const login=(email,password)=>{
 setloading(true)
   return signInWithEmailAndPassword(auth,email,password)
}
const logout=()=>{
    setloading(true)
  return  signOut(auth)
   
}

    const authinfo={
        user,
        loading,
        createuser,
        login,
        logout,
       
    }

    return (
      <authcontext.Provider value={authinfo}>{children}</authcontext.Provider>
    );
};

export default Authprovide;