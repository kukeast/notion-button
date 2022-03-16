import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    padding: 0 16px;
    gap: 8px;
    border-bottom: 1px solid ${({theme}) => theme.gray2};
`
const Tab = styled.div`
    flex: 1;
    text-align: center;
    padding: 16px 0;
    font-size: 15px;
    cursor: pointer;
    color: ${props => props.select ? props.theme.gray9 : props.theme.gray6};
    &:hover{
        color: ${props => props.select ? props.theme.gray9 : props.theme.gray7};
    }
    border-bottom: 2px solid ${props => props.select ? props.theme.primary : props.theme.layer};
`
const tabs = [
    {
        id: 1,
        title: 'Properties',
    },
    {
        id: 2,
        title: 'Common',
    },
]
function Tabs({ callback, selectTab }) {
    return (
        <Wrapper>
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    onClick={() => callback(tab.id)}
                    select={selectTab === tab.id}
                >
                    {tab.title}
                </Tab>
            ))}
        </Wrapper>
    )
}

export default Tabs;
