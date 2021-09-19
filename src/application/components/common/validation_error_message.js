import React from 'react'
import styled from 'styled-components'

export const ErrorBox = styled.div`
    height: 16px !important;
`

export const ErrorLabel = styled.span`
    font-size: 10px;
    margin-top: 8px;
    font-weight: 700;
    color: ${props => props.theme.color.red};
`

export const ValidationErrorMessage = ({error, errorMessageOverride, hideValidationMessage}) => {
    const message = errorMessageOverride !== '' ? errorMessageOverride : error !== undefined && error !== null ? error.message : ''
    return <ErrorBox>
        {
            error !== undefined && error !== null && !hideValidationMessage && <ErrorLabel>{message}</ErrorLabel>
        }
    </ErrorBox>
}