import React from 'react'
import { nanoid } from 'nanoid'
import { FormElementWrapper, InputWrapper } from '../styles'
import { ValidationErrorMessage } from '../../../common/validation_error_message'

const Input = ({ label, name, register, validate = {}, error, hideValidationMessage = false, defaultValue='', inputType='number', errorMessageOverride='', cssWidth = '100%', cssMargin='0' } ) => {
    const htmlId = nanoid()
    return <FormElementWrapper cssWidth={cssWidth} cssMargin={cssMargin}>
        <label className='label' htmlFor={htmlId}>{label}</label>
        <InputWrapper>
            <input type={inputType} id={htmlId} name={name} defaultValue={defaultValue} {...register(name, {
                validate: validate
            })} />
        </InputWrapper>
        <ValidationErrorMessage hideValidationMessage={hideValidationMessage} error={error} errorMessageOverride={errorMessageOverride} />
    </FormElementWrapper>
}

export default Input