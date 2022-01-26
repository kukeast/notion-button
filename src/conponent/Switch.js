import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const SwicthElem = styled.div`
    display: inline-flex;
    align-items: center;
    width: 44px;
    height: 28px;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    ${props => props.active ? css`
        background-color: ${props.theme.primary};
        div{
            transform: translateX(16px);
        }
    ` : css`
        background-color: ${props.theme.gray3};
        div{
            transform: translateX(0px);
        }
    `}
`
const Toggle = styled.div`
    width: 22px;
    height: 22px;
    margin: 3px;
    border-radius: 12px;
    background-color: ${props => props.theme.layer};
    transition: 0.3s;
`

function Switch ({ name, callback, defaultValue }) {
    const [active, setActive] = useState(defaultValue)
    useEffect(() => {
        callback(name, active)
        //eslint-disable-next-line
    }, [active])
    useEffect(() => {
        setActive(defaultValue)
    }, [defaultValue])
    return(
        <SwicthElem 
            active={active} 
            onClick={() => setActive(prev => !prev)}
        >
            <Toggle/>
        </SwicthElem>
    )
}

export default Switch