import React, { createContext, useState } from 'react';
// import { ThemeContext } from 'styled-components';
import { darkTheme, lightTheme } from '../constants/theme';

export const ThemeContext = createContext(lightTheme)

function ThemeStore({ children }) {
    const [themeType, setThemeType] = useState(lightTheme)
    const switchTheme = value => {
        setThemeType(value ? darkTheme : lightTheme);
    }

    return (
        <ThemeContext.Provider value={{ switchTheme, themeType} }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeStore;
