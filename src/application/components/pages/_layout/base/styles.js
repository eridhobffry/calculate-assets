import styled from "styled-components"

export const BaseWrapper = styled.div`
    width: 100vw;
    height: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.color.rollianBackground};
    overflow: auto;
`