import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.input`
    padding: 10px 12px;
    border-radius: 8px;
    border: 0;
    outline: none;
    color: ${({theme}) => theme.gray9};
    border: 1px solid ${({theme}) => theme.gray2};
    font-size: 16px;
    font-weight: 400;
    transition: 0.2s;
    background-color: ${({theme}) => theme.layer};
    &::placeholder{
        color: ${({theme}) => theme.gray4};
    }
    &:hover{
        border: 1px solid ${({theme}) => theme.gray5};
    }
    &:focus{
        border: 1px solid ${({theme}) => theme.primary};
    }
`

function TextField({ defaultValue, placeholder, name, type = 'text', callback }) {
    const [text, setText] = useState(defaultValue);
    const inputElem = useRef();
    const handleChange = () => {
        setText(inputElem.current.value)
        callback(name, inputElem.current.value)
    }
    useEffect(() => {
        setText(defaultValue)
    }, [defaultValue])
    return (
        <Wrapper
            type={type}
            maxLength={32}
            onChange={handleChange}
            placeholder={placeholder}
            value={text}
            ref={inputElem}
        />
    )
}

export default TextField;
