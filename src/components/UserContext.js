import { applyActionCode, PhoneAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { app } from "../firebase-config";
export const UserContext  = React.createContext();

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState();
    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
    },[]);
    return(
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
)
}