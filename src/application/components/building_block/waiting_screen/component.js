import React from 'react'
import styled, { withTheme } from 'styled-components'
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const StyledWaitingScreen = styled.div`
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    background-color: #ffffff9e;
    box-sizing: border-box;
    overflow: hidden;
    z-index: 7000;
`

const ContentWrapper = styled.div`
height: 100vh;
width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WaitingScreen = ({
    waitingScreen,
    theme
})=> {  
    if(!waitingScreen.isVisible) return null

    return <StyledWaitingScreen>
        <ContentWrapper>
            <Loader
                type="ThreeDots"
                color={theme.color.primary}
                height={100}
                width={100}
            />
        </ContentWrapper>
    </StyledWaitingScreen>
}

export default withTheme(WaitingScreen)