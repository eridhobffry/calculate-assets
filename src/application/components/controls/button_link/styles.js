import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(NavLink)`
    padding: 0px;
    text-decoration: none;
    margin: 0px;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    width: ${props => props.strechted ? '100%' : 'auto'};
    border-radius: 0px;
    border: 1px solid ${props => props.secondary ? props.theme.color.rollianSecondary : props.theme.color.primary};
    background-color: ${props => props.secondary ? props.theme.color.rollianSecondary : 'transparent'};
    padding: 10px 25px;
    color: ${props => props.secondary ? props.theme.color.white : props.theme.color.primary};
    font-weight: ${props => props.theme.fontWeight.medium};

    &:hover {
        border: 1px solid ${props => props.secondary ? props.theme.color.rollianSecondaryDark : props.theme.color.primary};
        background-color: ${props => props.secondary ? props.theme.color.rollianSecondaryDark : props.theme.color.primaryLight};
    }
`