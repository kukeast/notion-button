import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Icon from './Icon';
import MockButton from './MockButton';

const Wrapper = styled.div`
    font-size: 14px;
    font-weight: 400;
    padding: 10px;
    border-radius: 8px;
    /* color: ${({theme}) => theme.gray9}; */
    border: 1px solid ${({theme}) => theme.gray2};
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(2, 1fr);
`
const Delete = styled.div`
    display: flex;
    border-radius: 8px;
    margin-right: 4px;
    visibility: hidden;
    opacity: 0.6;
    &:hover{
        opacity: 1;
    }
`
const OptionWrapper = styled.div`
    cursor: pointer;
    &:hover {
        > p{
            color: ${({theme}) => theme.gray7};
        }
        > div{
            background-color: ${({theme}) => theme.gray1};
        }
        ${Delete} {
            visibility: visible;
        }
    }
    ${props => props.select && css`
        > p{
            color: ${({theme}) => theme.primary};
        }
        > div{
            background-color: ${({theme}) => theme.primary0};
        }
        &:hover {
            > p{
                color: ${({theme}) => theme.primary};
            }
            > div{
                background-color: ${({theme}) => theme.primary1};
            }
        }
    `}
`
const TitleWrapper = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`
const Title = styled.p`
    font-size: 14px;
    color: ${({theme}) => theme.gray7};
    transition: 0.2s;
    overflow: hidden;
`
const MockWrapper = styled.div`
    width: 100%;
    height: 90px;
    background-color: ${({theme}) => theme.gray0};
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
`


function Select({ name, options, type, size, roundedCorner, callback, defaultValue }) {
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
            {options.map(i => (
                <Option 
                    key={i}
                    onClick={() => handleClick(i)} 
                    select={select === i}
                    title={i}
                    name={name}
                    type={type}
                    size={size}
                    roundedCorner={roundedCorner}
                />
            ))}
        </Wrapper>
    )
}

export default Select;

export function Option ({ onClick, deleteOnClick, name, title, type, size, roundedCorner, select }) {
    return(
        <OptionWrapper onClick={onClick} select={select}>
            <TitleWrapper>
                <Title>{title ? title : "Button name"}</Title>
                {!name && 
                    <Delete onClick={deleteOnClick}>
                        <Icon name="delete" color="gray6"/>
                    </Delete>
                }
            </TitleWrapper>
            <MockWrapper>
                <MockButton 
                    type={name === 'type' ? title : type}
                    size={name === 'size' ? title : size}
                    roundedCorner={name === 'roundedCorner' ? title : roundedCorner}
                />
                
            </MockWrapper>
        </OptionWrapper>
    )
}