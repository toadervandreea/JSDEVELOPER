import axios from "axios";
import { createContext, useEffect, useState } from "react";
import configData from "../config.json";
export const AuthContext = createContext();

export const AuthContexProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  
    const login = async (inputs) => {
        const res = await axios.post(configData.SERVER_URL+'veifyLogin', inputs);
        setCurrentUser(res.data);
    };

    const logout = async (inputs) => {
        await axios.post(configData.SERVER_URL+'logout');
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        setauthenticated(true);
        localStorage.setItem("authenticated", true);
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{currentUser, login, logout, authenticated}}>
            {children}
        </AuthContext.Provider>
    );
};