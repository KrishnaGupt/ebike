"use client"
import { createContext, useState } from "react";

export const AppDataContext = createContext()

export function AppDataProvider({ children }) {
    const [data, setData] = useState([])
    return (
        <AppDataContext.Provider value={{ data, setData }}>
            {children}
        </AppDataContext.Provider>
    )
}