import React from 'react';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

const Style = {
    decoration: {
        bold: css`font-weight: bold;`,
        italic: css`font-style: italic;`,
        underline: css`text-decoration: underline;`,
        strikethrough: css`text-decoration: line-through;`,
    },
    roundedCorner: {
        SQ: css`border-radius: 0;`,
        M: css`border-radius: 8px;`,
        L: css`border-radius: 16px;`,
        PL: css`border-radius: 40px;`,
    },
    size: {
        S: css`
            font-size: 14px;
            padding: 10px 12px;
        `,
        M: css`
            font-size: 16px;
            padding: 14px 16px;
        `,
        L: css`
            font-size: 18px;
            padding: 18px 20px;
        `,
        XL: css`
            font-size: 20px;
            padding: 22px 22px;
        `,
    },
}

const Wrapper = styled.div`
    text-align: center;
    cursor: pointer;
    line-height: 1em;
    transition: 0.2s;
    ${props => css`
        background-color: ${props.buttonStyle.backgroundColor};
        border: 2px solid ${props.buttonStyle.backgroundColor};
        color: ${props.buttonStyle.textColor};
        ${Style.decoration[props.buttonStyle.decoration]};
        ${Style.roundedCorner[props.buttonStyle.roundedCorner]};
        ${Style.size[props.buttonStyle.size]};
        &:hover{
            background-color: ${darken(0.1, props.buttonStyle.backgroundColor)};
            border: 2px solid ${darken(0.1, props.buttonStyle.backgroundColor)};
        }
        &:active{
            background-color: ${darken(0.15, props.buttonStyle.backgroundColor)};
            border: 2px solid ${darken(0.15, props.buttonStyle.backgroundColor)};
        }
    `}
    ${props => props.buttonStyle.type === 'outline' && css`
        background-color: transparent;
        border: 2px solid ${props.buttonStyle.backgroundColor};
        color: ${props.buttonStyle.backgroundColor};
        &:hover{
            background-color: transparent;
            border: 2px solid ${darken(0.1, props.buttonStyle.backgroundColor)};
            color: ${darken(0.1, props.buttonStyle.backgroundColor)};
        }
        &:active{
            background-color: transparent;
            border: 2px solid ${darken(0.15, props.buttonStyle.backgroundColor)};
            color: ${darken(0.15, props.buttonStyle.backgroundColor)};
        }
    `}
`
function SharedButton({ data, place, callback }) {
    const openLink = () => {
        if (data.action === "link") {
            const url = data.url.slice(0, 4) === "http" ? data.url : "https://" + data.url
            if (data.newTab === "true"){
                window.open(url)
            }else {
                window.open(url, "_top")
            }
        } else if (data.action === "mail"){
            window.open("mailto:" + data.url, "_top")
        } else if (data.action === "call"){
            window.open("tel:" + data.url, "_top")
        }
    }
    const handleClick = e => {
        if(place === 'Editor'){
            callback(data.id)
        }else{
            openLink()
        }
    }
    return (
        <>
            <Wrapper 
                onClick={e => handleClick(e)}
                buttonStyle={data}
            >
                {data.title ? data.title : 'Button name'}
            </Wrapper>
        </>
    )
}

export default SharedButton;
