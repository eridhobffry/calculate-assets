import React, { Fragment } from 'react'
import { GlobalStyle } from './global_style'
import * as Styled from './styles'
import Div100vh from 'react-div-100vh'
import { nanoid } from 'nanoid'
import WaitingScreen from 'application/components/building_block/waiting_screen'

const BaseLayoutComponent = (props) => {
    const { children } = props
    return <Fragment>
        <GlobalStyle />
        <Div100vh id={`layout-root-content-${nanoid()}`}>
            <Styled.BaseWrapper>
                <Styled.ContentWrapper>
                    <Styled.ImageLogo id='logo' src='https://uploads-ssl.webflow.com/5f6c3b4dfd4c1d2c533c6f25/5f6c3b4dfd4c1d74a03c6f5a_Finvia_Logo_White_Subline.svg' alt='logo' />
                    <Styled.ChildrenContainerCard>
                        {children}
                    </Styled.ChildrenContainerCard>
                </Styled.ContentWrapper>
            </Styled.BaseWrapper>
        </Div100vh>
        <WaitingScreen />
    </Fragment>
}

export default BaseLayoutComponent
