import React from 'react';
import styled, { css } from 'styled-components';
import SharedButton from './SharedButton';

const Direction = {
    vertical: {
        left: css`
            flex-direction: column;
            justify-content: start;
            align-items: start;
        `,
        center: css`
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `,
        right: css`
            flex-direction: column;
            justify-content: end;
            align-items: end;
        `,
    },
    horizental: {
        left: css`
            flex-direction: row;
            justify-content: start;
            align-items: center;
        `,
        center: css`
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `,
        right: css`
            flex-direction: row;
            justify-content: end;
            align-items: center;
        `,
    },
}
const Width = {
    vertical: css`
        align-items: stretch;
    `,
    horizental: css`
        > div { flex: 1; };
    `,
}

const Wrapper = styled.div`
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    ${props => css`
        ${Direction[props.layout.direction][props.layout.alignment]};
        ${props.layout.width === 'wide' && Width[props.layout.direction]};
        gap: ${props.layout.spacing}px;
    `}
`
function SharedButtons({ data, place, selectCallback, deleteCallback, selectButton }) {
    return(
        <Wrapper layout={data.layout}>
            {data.buttons.map( buttonData => (
                <SharedButton
                    key={buttonData.id}
                    data={buttonData}
                    place={place}
                    selectCallback={selectCallback}
                    deleteCallback={deleteCallback}
                    buttonLength={data.buttons.length}
                    isSelect={selectButton === buttonData.id}
                />
            ))}
        </Wrapper>
    )
}

export default SharedButtons;
