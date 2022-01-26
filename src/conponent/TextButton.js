import { lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    line-height: 1em;
    transition: 0.2s;
    color: ${({theme}) => theme.primary};
    &:hover{
        color: ${({theme}) => lighten( 0.1 , theme.primary)};
    }
    &:active{
        color: ${({theme}) => lighten( 0.05 , theme.primary)};
    }
`
function TextButton({ children, onClick }) {
    return (
        <Wrapper onClick={onClick}>
            {children}
        </Wrapper>
    )
}

export default TextButton;
