import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ErrorBox, ErrorLabel } from 'application/components/fragments/error_information'

export const ValidationErrorMessage = ({error, errorMessageOverride, hideValidationMessage}) => {
    const {t} = useTranslation()
    const message = errorMessageOverride !== '' ? errorMessageOverride : error !== undefined && error !== null ? error.message : ''
    return <ErrorBox>
        {
            error !== undefined && error !== null && !hideValidationMessage && <ErrorLabel>{i18n.exists(message) ? t(message) : message}</ErrorLabel>
        }
    </ErrorBox>
}