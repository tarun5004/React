import { createContext } from "react";

export const ThemeContext = createContext("light");

export const ThemeProvider = ({ children }) => {
    return <ThemeContext.Provider value="light">{children}</ThemeContext.Provider>
};
