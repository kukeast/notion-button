import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './ThemeStore';

function Theme({ children }){
    const theme = useContext(ThemeContext);
    return (
        <ThemeProvider theme={theme.themeType}>
            {children}
        </ThemeProvider>
    );
  };
  
export default Theme;