import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ColorPicker from './ColorPicker';
import SegmentControl from './SegmentControl';
import Select from './Select';
import SliderBar from './SliderBar';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import { ThemeContext } from '../util/ThemeStore';

const Wrapper = styled(Card)`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    flex: 1;
`
const TabContents = styled.div`
    padding: 0 16px 24px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
`
const Title = styled.p`
    margin: 24px 0 0;
    font-size: 16px;
    color: ${({theme}) => theme.gray9};
`
const Label = styled.p`
    margin: 16px 0 8px;
    font-size: 14px;
    color: ${({theme}) => theme.gray6};
`
const SwitchWrapper = styled.div`
    margin: 16px 0 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p{
        margin: 0;
    }
`

function Controller({ selectButton, data, callback }) {
    const theme = useContext(ThemeContext)
    const [selectTab, setSelectTab] = useState(1)
    const [buttonsData, setButtonsData] = useState(data.buttons)
    const [layoutData, setLayoutData] = useState(data.layout)
    const [currentButton, setCurrentButton] = useState(data.buttons.filter(button => button.id === selectButton)[0])
    const getTabId = id => {
        setSelectTab(id)
    }
    const handleSwitchTheme = (name, value) => {
        theme.switchTheme(value)
    }
    const getButtonsData = (name, value) => {
        setButtonsData(data.buttons.map(
            button => button.id === selectButton ?
                {
                    ...button,
                    [name]: value,
                } : button  
        ))
    }
    const getLayoutData = (name, value) => {
        setLayoutData({
            ...layoutData,
            [name] : value,
        })
    }

    useEffect(() => {
        setCurrentButton(data.buttons.filter(button => button.id === selectButton)[0])
        setButtonsData(data.buttons)
    }, [selectButton, data])

    useEffect(() => {
        callback({
            layout: layoutData,
            buttons: buttonsData,
        })
        //eslint-disable-next-line
    }, [buttonsData, layoutData])
    return (
        <Wrapper>
            <Tabs callback={getTabId} selectTab={selectTab}/>
            {selectTab === 1 ?
                <TabContents>
                    <Title>Basic</Title>
                    <Label>Label</Label>
                    <TextField
                        defaultValue={currentButton.title} 
                        placeholder="Button name"
                        name='title' 
                        callback={getButtonsData}
                    />
                    <Label>Action</Label>
                    <SegmentControl
                        name='action'
                        segment={["link", "mail", "call"]}
                        callback={getButtonsData}
                        defaultValue={currentButton.action} 
                    />
                    {currentButton.action === "link" ? 
                        <>
                            <Label>Link</Label>
                            <TextField 
                                defaultValue={currentButton.url} 
                                placeholder="Paste link"
                                name='url' 
                                callback={getButtonsData}
                            />
                        </> : currentButton.action === "mail" ? 
                        <>
                            <Label>E-mail</Label>
                            <TextField
                                type="email"
                                defaultValue={currentButton.url} 
                                placeholder="Paste email address"
                                name='url' 
                                callback={getButtonsData}
                            />
                        </> : 
                        <>
                        <Label>Phone number</Label>
                            <TextField 
                                type="number"
                                defaultValue={currentButton.url} 
                                placeholder="Paste phone number"
                                name='url' 
                                callback={getButtonsData}
                            />
                        </>
                    }
                    <SwitchWrapper>
                        <Label>Open a new tab</Label>
                        <Switch
                            name="newTab"
                            callback={getButtonsData}
                            defaultValue={currentButton.newTab} 
                        />
                    </SwitchWrapper>
                    <Title>Style</Title>
                    <Label>Decoration</Label>
                    <SegmentControl
                        name='decoration'
                        segment={["none", "bold", "italic", "underline", "strikethrough"]}
                        callback={getButtonsData}
                        defaultValue={currentButton.decoration} 
                    />
                    <Label>Color</Label>
                    {currentButton.type === "container" ? 
                        <>
                            <ColorPicker
                                name='backgroundColor'
                                title="Background"
                                callback={getButtonsData}
                                defaultColor={currentButton.backgroundColor}
                            />
                            <ColorPicker
                                name='textColor'
                                title="Text"
                                callback={getButtonsData}
                                defaultColor={currentButton.textColor}
                            />
                        </> : 
                        <ColorPicker
                            name='backgroundColor'
                            title="Outline & Text"
                            callback={getButtonsData}
                            defaultColor={currentButton.backgroundColor}
                        />
                    }
                    <Title>Shape</Title>
                    <Label>Type</Label>
                    <Select
                        name="type"
                        options={["container", "outline"]}
                        type={currentButton.type}
                        size={currentButton.size}
                        roundedCorner={currentButton.roundedCorner}
                        callback={getButtonsData}
                        defaultValue={currentButton.type}
                    />
                    <Label>Size</Label>
                    <Select
                        name="size"
                        options={["small", "medium", "large", "big"]}
                        type={currentButton.type}
                        size={currentButton.size}
                        roundedCorner={currentButton.roundedCorner}
                        callback={getButtonsData}
                        defaultValue={currentButton.size}
                    />
                    <Label>Rounded corner</Label>
                    <Select
                        name="roundedCorner"
                        options={["square", "medium", "large", "pill"]}
                        type={currentButton.type}
                        size={currentButton.size}
                        roundedCorner={currentButton.roundedCorner}
                        callback={getButtonsData}
                        defaultValue={currentButton.roundedCorner}
                    />
                </TabContents> :
                <TabContents>
                    <Title>Layout</Title>
                    <Label>Width</Label>
                    <SegmentControl
                        name='width'
                        segment={["wrap", "wide"]}
                        callback={getLayoutData}
                        defaultValue={layoutData.width} 
                    />
                    {layoutData.width === "wrap" && 
                        <>
                            <Label>Alignment</Label>
                            <SegmentControl
                                name='alignment'
                                segment={["left", "center", "right"]}
                                callback={getLayoutData}
                                defaultValue={layoutData.alignment} 
                            />
                        </>
                    }
                    {buttonsData.length > 1 &&
                        <>
                            <Label>Direction</Label>
                            <SegmentControl
                                name='direction'
                                segment={["vertical", "horizental"]}
                                callback={getLayoutData}
                                defaultValue={layoutData.direction} 
                            />
                            <Label>Spacing</Label>
                            <SliderBar
                                name='spacing'
                                callback={getLayoutData}
                                defaultValue={layoutData.spacing} 
                            />
                        </>
                    }
                    <Title>Theme</Title>
                    <SwitchWrapper>
                        <Label>Dark mode</Label>
                        <Switch
                            callback={handleSwitchTheme}
                            defaultValue={false}
                        />
                    </SwitchWrapper>
                </TabContents>
            }
        </Wrapper>
    )
}

export default Controller;
