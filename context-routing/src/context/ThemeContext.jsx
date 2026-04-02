import { createContext } from "react";
import { useState } from "react";

export const ThemeMode = createContext();


export const ThemeProvider = ({ children }) => {
        const [themes, setThemes] = useState('dark');

    return <ThemeMode.Provider value={{ themes, setThemes }}>{children}</ThemeMode.Provider>
};
