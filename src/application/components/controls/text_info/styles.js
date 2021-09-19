import styled from "styled-components";

export const TextInfoHeadline = styled.h1`
    margin: 0px;
    color: ${p => p.theme.color.text};
    font-size: ${p => p.theme.fontSize.headline1};
    font-weight: ${p => p.theme.fontWeight.bold};
`

export const TextInfoDescription = styled.h2`
    margin: 0px;
    color: ${p => p.theme.color.text};
    font-size: ${p => p.theme.fontSize.medium};
    font-weight: ${p => p.theme.fontWeight.light};
`

export const TextInfoWrapper = styled.div`
    display: flex;
    flex: 1 1;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
`