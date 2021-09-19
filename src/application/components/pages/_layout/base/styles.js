import styled from "styled-components"
import {isMobile} from 'react-device-detect'

export const BaseWrapper = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 2% ${isMobile ? '5%' : '15%'} 5%;
    background: ${p => `linear-gradient(180deg, ${p.theme.color.primary} 50%, ${p.theme.color.white} 50%)`};
`

export const ImageLogo = styled.img`
    width: ${isMobile ? '50%' : '20%'};
    margin: ${isMobile ? '10px auto 20px' : ''};
`

export const ChildrenContainerCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 100%;
    height: auto;
    background-color: ${p => p.theme.color.white};
    padding: 5%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin: 20px 0px;
`