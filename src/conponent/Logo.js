import React, { useState } from 'react';
import styled from 'styled-components';

const LogoText = styled.p`
    font-size: 24px;
    font-weight: 500;
    color: ${({theme}) => theme.gray3};
    transition: 0.2s;
    &:hover{
        color: ${({theme}) => theme.gray5};
    }
    position: fixed;
    left: 30px;
    top: 30px;
`
const Copyright = styled.p`
    color: ${({theme}) => theme.gray5};
    transition: 0.5s;
    position: fixed;
    left: ${props => props.isShow ? "30px" : "-140px"};
    bottom: 30px;
`

function Logo() {
    const [isShow, setIsShow] = useState(false)
    const handleMouseOver = () => {
        setIsShow(true)
    }
    const handleMouseLeave = () => {
        setIsShow(false)
    }
    return (
        <>
            <LogoText onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>n-btn.link</LogoText>
            <Copyright isShow={isShow}>made by kukeast</Copyright>
        </>
    )
}

export default Logo;
