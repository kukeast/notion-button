import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 6px 0;
`
const Value = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({theme}) => theme.gray9};
    width: 40px;
`
const CustomSlider = styled(Slider)`
    .rc-slider {
        height: 16px;
    }
    .rc-slider-rail {
        background-color: ${({theme}) => theme.gray2};
        height: 6px;
    }
    .rc-slider-track {
        height: 6px;
        background-color: ${({theme}) => theme.primary};
    }
    .rc-slider-handle {
        width: 16px;
        height: 16px;
        margin-top: -5px;
        border: none;
        background-color: ${({theme}) => theme.primary};
        &:active{
           box-shadow: none; 
        }
    }
`

function SliderBar({ name, callback, defaultValue }) {
    const [value, setValue] = useState(defaultValue)
    const handleChange = e => {
        setValue(e)
        callback(name, e)
    }
    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])
    return (
        <Wrapper>
            <Value>
                {value}px
            </Value>
            <CustomSlider 
                defaultValue={value}
                min={0}
                max={32}
                onChange={e => handleChange(e)}
            />
        </Wrapper>
    )
}

export default SliderBar;
