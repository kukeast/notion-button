import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: inline-block;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 12px;
    cursor: pointer;
    line-height: 1em;
    transition: 0.2s;
    color: ${({theme}) => theme.white};
    background-color: ${props => props.copied ? props.theme.teal : props.theme.primary};
    padding: 16px;
    &:hover{
        background-color: ${props => props.copied ? darken( 0.05 , props.theme.teal) : darken( 0.05 , props.theme.primary)};
    }
    &:active{
        background-color: ${props => props.copied ? darken( 0.1 , props.theme.teal) : darken( 0.1 , props.theme.primary)};
    }
`
function Button({ children, onClick, copied }) {
    return (
        <Wrapper onClick={onClick} copied={copied}>
            {children}
        </Wrapper>
    )
}

export default Button;
