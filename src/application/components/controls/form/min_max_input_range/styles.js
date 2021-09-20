import styled from "styled-components";
import { isMobile } from 'react-device-detect'

export const MinMaxInputRangeWrapper = styled.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: ${isMobile ? 'column' : 'row'};
    gap: 5px;
    width: 100%;
    justify-content: space-between;
`

export const MinMaxWrapper = styled.div`
    display: flex;
    flex: 1 1 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`

export const Label = styled.h3`
    color: ${p => p.theme.color.text};
    font-size: ${p => p.theme.fontSize.medium18};
    font-weight: ${p => p.theme.fontWeight.regular};
    margin: 5px 0px;
`