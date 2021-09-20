import { Spacer } from 'application/components/common'
import { ButtonLink, TextInfo } from 'application/components/controls'
import React from 'react'
import BaseLayout from '../../_layout'
import ChartBar from 'application/components/building_block/charts'
import { ROUTES } from 'application/constants'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    display: flex;
    width: 100&;
    flex: 1 1;
    justify-content: center;
`

const CalculatedAssetsComponent = (props) => {
    const { changeValues } = props
    const handleChangeValues = () => {
        changeValues()
    }
    return <BaseLayout>
        <TextInfo
            headline={'Strategic Asset Alloction Result'}
            description={'Check bellow the result of your asset classes exposures:'}
        />
        <Spacer px='25' />
        <ChartBar {...props} />
        <Spacer px='25' />
        <ButtonContainer>
            <ButtonLink secondary buttonText='Change values' linkTo={ROUTES.BASE} onButtonClick={handleChangeValues} />
        </ButtonContainer>
    </BaseLayout>
}

export default CalculatedAssetsComponent
