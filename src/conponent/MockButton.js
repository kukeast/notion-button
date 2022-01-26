import React from 'react';
import styled, { css } from 'styled-components';

const boxStyle = {
    size: {
        small: css`
            width: 40px;
            height: 24px;
        `,
        medium: css`
            width: 50px;
            height: 30px;
        `,
        large: css`
            width: 60px;
            height: 36px;
        `,
        big: css`
            width: 70px;
            height: 42px;
        `,
    },
    roundedCorner: {
        square: css`border-radius: 0;`,
        medium: css`border-radius: 6px;`,
        large: css`border-radius: 12px;`,
        pill: css`border-radius: 24px;`,
    },
    type: {
        container: css`background-color: ${({theme}) => theme.primary};`,
        outline: css`background-color: ${({theme}) => theme.MockButton};`
    }
}
const textStyle = {
    size: {
        small: css`
            width: 20px;
        `,
        medium: css`
            width: 30px;
        `,
        large: css`
            width: 40px;
        `,
        big: css`
            width: 50px;
        `,
    },
    type: {
        container: css`background-color: ${({theme}) => theme.layer};`,
        outline: css`background-color: ${({theme}) => theme.primary};`
    }
}

const Wrapper = styled.div`
    ${props => boxStyle.type[props.type]};
    ${props => boxStyle.size[props.size]};
    ${props => boxStyle.roundedCorner[props.roundedCorner]};

    border: 2px solid ${({theme}) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
`
const Text = styled.div`
    ${props => textStyle.type[props.type]};
    ${props => textStyle.size[props.size]};
    height: 2px;
    border-radius: 2px;
    transition: 0.2s;
`

function MockButton({ size="large", roundedCorner="medium", type="container" }) {
    return (
        <Wrapper size={size} roundedCorner={roundedCorner} type={type}>
            <Text size={size} type={type}/>
        </Wrapper>
    )
}

export default MockButton;
