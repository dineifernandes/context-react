import { createContext, useState } from 'react'

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => { 


    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const toogleTheme = () => {

        const tema = theme === 'light' ? 'dark' : 'light';

        setTheme(tema);
        localStorage.setItem('theme', tema);
     }

    return <ThemeContext.Provider value={{theme, toogleTheme}}>{ children }</ThemeContext.Provider>
}