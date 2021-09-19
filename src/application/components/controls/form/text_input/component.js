import React from 'react'
import { nanoid } from 'nanoid'
import { FormElementWrapper, TextInputWrapper } from '../styles'
import { ValidationErrorMessage } from '../../../common/validation_error_message'

const TextInput = ({ label, name, register, onKeyPress = () => {}, validate = {}, error, hideValidationMessage = false, defaultValue='', inputType='number', errorMessageOverride='', onChange=()=>{}, cssWidth = '100%', cssMargin='0' } ) => {
    const htmlId = nanoid()
    return <FormElementWrapper cssWidth={cssWidth} cssMargin={cssMargin}>
        <label className='label' htmlFor={htmlId}>{label}</label>
        <TextInputWrapper>
            <input onKeyPress={onKeyPress} id={htmlId} name={name} defaultValue={defaultValue} ref={register({validate})} type={inputType} onChange={onChange}/>
        </TextInputWrapper>
        <ValidationErrorMessage hideValidationMessage={hideValidationMessage} error={error} errorMessageOverride={errorMessageOverride} />
    </FormElementWrapper>
}

export default TextInput