import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { color } from '../constants/theme';

const Wrapper = styled.div`
    position: relative;
    &+&{
        margin-top: 8px;
    }
`

const Select = styled.div`
    font-size: 16px;
    font-weight: 400;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${({theme}) => theme.gray9};
    border: 1px solid ${({theme}) => theme.gray2};
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        border: 1px solid ${({theme}) => theme.gray5};
    }
`
const ColorChip = styled.div`
    ${props => props.size === "small" ? 
        css`
            width: 22px;
            height: 22px;
            border-radius: 16px;
        ` : 
        css`
            width: 30px;
            height: 30px;
            border-radius: 50%;
            &:hover{
                transform: translateY(-2px);
            }
        `
    };
    transition: 0.2s;
    background-color: ${props => props.color};
    border: 1px solid ${({theme}) => theme.gray3};
    cursor: pointer;
`
const Title = styled.p`
    flex: 1;
`
const Options = styled.div`
    position: absolute;
    padding: 12px;
    margin-top: 4px;
    border-radius: 8px;
    border: 1px solid ${({theme}) => theme.gray2};
    background-color: ${({theme}) => theme.layer};
    box-shadow: 0px 4px 16px 0px rgba(33, 37, 41, 0.1);
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
    width: 100%;
    box-sizing: border-box;
    z-index: 9;
`

function ColorPicker({ name, title, defaultColor, callback }) {
    const [selectColor, setSelectColor] = useState(defaultColor)
    const [openOptions, setOpenOptions] = useState(false)
    const colors = [color.BLACK, color.GRAY8, color.GRAY6, color.GRAY4, color.GRAY2, color.WHITE, color.INDIGO6, color.BLUE5, color.CYAN6, color.TEAL6, color.GREEN6, color.LIME6, color.YELLOW6, color.ORANGE6, color.RED6, color.PINK6, color.GRAPE6, color.VIOLET6]
    const handleColorSelect = color => {
        setSelectColor(color)
        setOpenOptions(false)
        callback(name, color)
    }
    useEffect(() => {
        setSelectColor(defaultColor)
    },[defaultColor])
    return (
        <Wrapper>
            <Select onClick={() => setOpenOptions(prev => !prev)}>
                <Title>{title}</Title>
                <ColorChip size="small" color={selectColor}/>
            </Select>
            {openOptions && 
                <Options>
                    {colors.map( color => (
                        <ColorChip 
                            key={color}
                            onClick={() => handleColorSelect(color)} 
                            color={color}
                        />
                    ))}
                </Options>
            }
            
        </Wrapper>
    )
}

export default ColorPicker;
