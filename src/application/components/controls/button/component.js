import React from 'react'
import * as Styled from './styles'

const ButtonComponent = ({secondary = false, stretched = false, onButtonClick, buttonText, disabled = false}) => {
    return <Styled.Button
        secondary={secondary}
        onClick={onButtonClick}
        stretched={stretched}
        disabled={disabled}
    >
        {buttonText}
    </Styled.Button>
}

export default ButtonComponent
