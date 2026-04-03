import { createContext } from "react";
import { useState } from "react";

export const ThemeMode = createContext();


export const ThemeProvider = ({ children }) => {
        const [themes, setThemes] = useState('dark');
        const [renderPages, setRenderPages] = useState("home");

    return <ThemeMode.Provider value={{ themes, setThemes, renderPages, setRenderPages }}>{children}</ThemeMode.Provider>
};
