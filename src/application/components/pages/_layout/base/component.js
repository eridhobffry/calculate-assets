import React, { Fragment } from 'react'
import { GlobalStyle } from './global_style'
import * as Styled from './styles'
import Div100vh from 'react-div-100vh'
import { nanoid } from 'nanoid'

const BaseLayoutComponent = (props) => {
    const { children } = props
    return <Fragment>
        <GlobalStyle />
        <Div100vh id={`layout-root-content-${nanoid()}`}>
            <Styled.BaseWrapper>
                {children}
            </Styled.BaseWrapper>
        </Div100vh>
    </Fragment>
}

export default BaseLayoutComponent
