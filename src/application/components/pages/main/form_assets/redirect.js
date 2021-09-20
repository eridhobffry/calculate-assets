import React, { Fragment } from 'react'
import { Redirect } from 'react-router'
import { ROUTES } from 'application/constants'

const FormAssetsRedirect = (props) => {
    const { isSucceed, children } = props

    if (isSucceed) {
        return <Redirect to={ROUTES.YOUR_CALCULATED_ASSETS} />
    }
    return <Fragment>
        {children}
    </Fragment>
}

export default FormAssetsRedirect
