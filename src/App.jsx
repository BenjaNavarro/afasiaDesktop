/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, Suspense, lazy } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
const Login = lazy(()=>import("./Components/Login"));

export const ThemeContext = createContext(null);

export default function App() {

    const user = localStorage.getItem('userLoged') ? JSON.parse(localStorage.getItem('userLoged')): null

    const [Theme,setTheme] = useState("light");

    const ToggleTheme = () => {
        setTheme((current)=>(current === "light"?"dark":"light"));
    };

    return (
        <Routes>
            <Route path="/" element={
                <ThemeContext.Provider value={{Theme,setTheme}}>
                    <Login/>
                </ThemeContext.Provider>
            }/>
        </Routes>
    );
}
