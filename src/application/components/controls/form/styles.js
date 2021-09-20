import styled from 'styled-components'

export const FormElementWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.cssWidth ? props.cssWidth : '100%'};
    font-size: ${props => props.theme.fontSize.standard};
    color: ${props => props.theme.color.anthracite};
    margin:  ${props => props.cssMargin ? props.cssMargin : '0'};
    
    & label {
        margin-bottom: 4px;
        font-size: ${props => props.theme.fontSize.small};
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;

    & input{
        color: ${props => props.theme.color.anthracite};
        border: 1px solid ${props => props.cssValidationError ? props.theme.color.red : props.theme.color.color15};
        height: 38px;
        padding-left: 8px;
        padding-top: 0;
        padding-bottom: 0;
        width: 100%;
        box-sizing: border-box;
        background: ${p => p.theme.color.color15};

        @media (max-width: ${props => props.theme.breakpoint.tablet}px) {
            height: 41px;
            font-size: ${props => props.theme.fontSize.medium18};
        }
        
        &:hover {
            border: 1px solid ${props => props.disabled ? props.theme.color.gray15 : props.cssValidationError ? props.theme.color.red : props.theme.color.lightPowderGray};
        }
    
        &:active {
            border: 1px solid ${props => props.disabled ? props.theme.color.gray15 : props => props.theme.color.anthracite};
        }
    
        &:disabled {
            background-color: ${props => props.theme.color.gray5};
            color: ${props => props.theme.color.anthracite50};
        }
    
        &:focus{
            outline: none;
        }
    
        &:invalid{
            border: 1px solid ${props => props.hasPattern ? props.theme.color.red : props.theme.color.gray15};
        }
    }
`