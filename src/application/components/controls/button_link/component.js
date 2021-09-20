import React from 'react'
import * as Styled from './styles'

const ButtonLinkComponent = ({secondary = false, stretched = false, onButtonClick, buttonText, disabled = false, linkTo = '' }) => {
    return <Styled.Button
        to={linkTo}
        secondary={secondary}
        onClick={onButtonClick}
        stretched={stretched}
        disabled={disabled}
    >
        {buttonText}
    </Styled.Button>
}

export default ButtonLinkComponent
