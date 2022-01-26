import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Icon from './Icon';

const Wrapper = styled.div`
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.gray2};
    display: flex;
    padding: 4px;
    gap: 4px;
`
const Segment = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    background-color: ${props => props.select && props.theme.primary0};
    &:hover{
        background-color: ${props => props.select ? props.theme.primary1 : props.theme.gray1};
    }
`

function SegmentControl({ name, segment, callback, defaultValue }) {
    const [select, setSelect] = useState(defaultValue)
    const handleClick = i => {
        setSelect(i)
        callback(name, i)
    }
    useEffect(() => {
        setSelect(defaultValue)
    }, [defaultValue])
    return (
        <Wrapper>
            {segment.map( i => (
                <Segment 
                    key={i} 
                    onClick={() => handleClick(i)}
                    select={select === i}
                >
                    <Icon color={select === i ? "primary" : "gray8"} name={i}/>
                </Segment>
            ))}
        </Wrapper>
    )
}

export default SegmentControl;
