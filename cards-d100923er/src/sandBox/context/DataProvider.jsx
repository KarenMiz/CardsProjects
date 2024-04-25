import React, { createContext, useContext } from 'react'

// יצירת הקונטקסט
export const MyContext = createContext();

// יצירת הפרוויידר
export default function DataProvider({ children }) {
    const data = { data1: 100, data2: "Hello" }
    return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

// יצירת ההוק עם התניה שלקומפוננטה לא תהיה גישה למידע אם אין לה את הקונטקס 
export const useData = () => {
    const context = useContext(MyContext)
    if (!context) throw new Error("Error");
    return context;
}