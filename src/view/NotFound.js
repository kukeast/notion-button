import React from 'react';
import styled from 'styled-components';
import Button from '../conponent/Button';
import { EditorGlobalStyles } from '../constants/global';

const Wrapper = styled.div`
    font-family: 'Outfit', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    padding: 30px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NotionWindow = styled.div`
    box-shadow: 0px 8px 16px 0px rgba(33, 37, 41, 0.05);
    background-color: ${({ theme }) => theme.layer};
    width: 400px;
    padding: 20px 20px 40px 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`
const WindowHeader = styled.div`
    display: flex;
    gap: 8px;
    > div{
        width: 12px;
        height: 12px;
        background: red;
        border-radius: 6px;
        :nth-child(1){
            background-color: ${({ theme }) => theme.red};
        }
        :nth-child(2){
            background-color: ${({ theme }) => theme.yellow};
        }
        :nth-child(3){
            background-color: ${({ theme }) => theme.green};
        }
    }
`

const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
`
const Title = styled.p`
    font-size: 30px;
    color: ${({theme}) => theme.gray8};
`
const Description = styled.p`
    font-size: 16px;
    line-height: 1.5em;
    color: ${({theme}) => theme.gray5};
    margin-bottom: 16px;
`

function NotFound() {
    return (
        <Wrapper>
            <EditorGlobalStyles/>
            <NotionWindow>
                <WindowHeader>
                    <div/><div/><div/>
                </WindowHeader>
                <ContentsWrapper>
                    <Title>404 Not Found</Title>
                    <Description>The link you followed probably broken,<br/> or the page has been removed.</Description>
                    <Button onClick={() => window.location.assign("/")}>Back to site</Button>
                </ContentsWrapper>
            </NotionWindow>
        </Wrapper>
    );
}

export default NotFound;
