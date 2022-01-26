import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { icon } from '../constants/icon';

function Icon ({ color, name }) {
    const themeContext = useContext(ThemeContext)
    return(
        <svg width={16} height={16} fill={themeContext[color]} xmlns="http://www.w3.org/2000/svg">
            {icon[name]}
        </svg>
    )
}

export default Icon;
