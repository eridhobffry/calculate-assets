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