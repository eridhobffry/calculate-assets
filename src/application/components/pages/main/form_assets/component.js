import { Spacer } from 'application/components/common'
import { TextInfo } from 'application/components/controls'
import React from 'react'
import BaseLayout from '../../_layout'
import { Forms } from './sections'

const FormAssetsComponent = () => {
    return <BaseLayout>
        <TextInfo
            headline={'Strategic Asset Alloction'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'}
        />
        <Spacer px='25' />
        <Forms />
    </BaseLayout>
}

export default FormAssetsComponent
