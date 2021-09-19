import React from 'react'
import * as Styled from './styles'

const TextInfoComponent = ({headline, description}) => {
    return <Styled.TextInfoWrapper>
        <Styled.TextInfoHeadline>
            {headline}
        </Styled.TextInfoHeadline>
        <Styled.TextInfoDescription>
            {description}
        </Styled.TextInfoDescription>
    </Styled.TextInfoWrapper>
}

export default TextInfoComponent
