import React, { useEffect, useState } from 'react';
import QueryString from 'qs';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import Button from '../conponent/Button';
import Card from '../conponent/Card';
import Controller from '../conponent/Controller';
import SharedButtons from '../conponent/SharedButtons';
import TextButton from '../conponent/TextButton';
import { EditorGlobalStyles } from '../constants/global';
import { color } from '../constants/theme';
import Logo from '../conponent/Logo';
import { properties } from '../constants/properties';

const Wrapper = styled.div`
    font-family: 'Outfit', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    padding: 30px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
`
const Canvas = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`
const NotionWindow = styled.div`
    box-shadow: 0px 8px 16px 0px rgba(33, 37, 41, 0.05);
    background-color: ${({ theme }) => theme.notion};
    width: 700px;
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
const Panel = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`
const ShareWrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 16px 16px;
    text-align: center;
`

var lastButtonId = 1
const defaultButtonStyle = {
    id: 1,
    url: '',
    action: properties.action[0],
    newTab: false,
    title: '',
    backgroundColor: color.BLACK,
    textColor: color.WHITE,
    decoration: properties.decoration[0],
    type: properties.type[0],
    size: properties.size[2],
    roundedCorner: properties.roundedCorner[1],
}

function Editor() {
    const [copied, setCopied] = useState(false)
    const [defaultButton, setDefaultButton] = useState(defaultButtonStyle)
    const [data, setData] = useState({
        layout: {
            alignment: properties.alignment[1],
            direction: properties.direction[0],
            spacing: 16,
            width: properties.width[0],
        },
        buttons: [defaultButton]
    })
    const [selectButton, setSelectButton] = useState(1)

    const getData = data => {
        setData(data)
    }
    const selectButtonCallback = button => {
        setSelectButton(button)
    }
    const handleAddButton = () => {
        setData({
            ...data,
            buttons: data.buttons.concat({
                ...defaultButton,
                id: lastButtonId + 1
            })
        })
        setSelectButton(lastButtonId + 1)
        lastButtonId = lastButtonId + 1
    }
    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }
    const handleDeleteButton = (e, button) => {
        e.stopPropagation()
        if(button.id === selectButton){
            setSelectButton(data.buttons.filter(
                b => b.id !== button.id
            )[0].id)
        }
        setData({
            ...data,
            buttons: data.buttons.filter(
                b => b.id !== button.id
            )
        })
    }
    const copyLink = () => {
        const queryString = QueryString.stringify(data)
        return 'https://n-btn.link/share?' + queryString
    }
    useEffect(() => {
        setDefaultButton(data.buttons[data.buttons.length - 1])
    }, [data])
    return (
        <>
            <EditorGlobalStyles/>
            <Wrapper>
                <Logo/>
                <Canvas>
                    <NotionWindow>
                        <WindowHeader>
                            <div/><div/><div/>
                        </WindowHeader>
                        <SharedButtons
                            data={data}
                            place='Editor'
                            selectCallback={selectButtonCallback}
                            deleteCallback={handleDeleteButton}
                            selectButton={selectButton}
                        />
                        {data.buttons.length < 4 && 
                            <TextButton 
                                onClick={() => handleAddButton()}
                            >+ Add a new button</TextButton>
                        }
                    </NotionWindow>
                </Canvas>
                <Panel>
                    <Controller selectButton={selectButton} data={data} callback={getData}/>
                    <ShareWrapper>
                        <TextButton onClick={() => window.open("https://kukeast.notion.site/How-to-use-n-btn-link-a922c8007a3d49d2b05b7bff42c58c4d")}>How to embed link?</TextButton>
                        <CopyToClipboard text={copyLink()} onCopy={handleCopy}>
                            <Button copied={copied}>{copied ? 'Copied!' : 'Copy link'}</Button>
                        </CopyToClipboard>
                    </ShareWrapper>
                </Panel>
            </Wrapper>
        </>
    )
}

export default Editor;
