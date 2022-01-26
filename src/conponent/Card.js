import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.layer};
    border: 1px solid ${({theme}) => theme.gray2};
    border-radius: 12px;
`

function Card({ className, children }) {
    return(
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
}

export default Card;
