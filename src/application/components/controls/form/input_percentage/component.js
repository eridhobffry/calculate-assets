import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'
import { FormElementWrapper, InputWrapper } from '../styles'
import { ValidationErrorMessage } from '../../../common/validation_error_message'
import { Controller } from 'react-hook-form'
import NumberFormat from 'react-number-format'

const InputPercentage = ({ listenToDefaultValueChange = false, setValue, label, name, validate = {}, error, hideValidationMessage = false, control, inputType = 'number', errorMessageOverride = '', cssWidth = '100%', cssMargin = '0', onPercentageChange = () => { }, defaultValue = null }) => {
    const htmlId = nanoid()
    const handleChange = (onChange, value) => {
        onChange(value)
        onPercentageChange(value)
    }

    useEffect(() => {
        if (listenToDefaultValueChange) {
            setValue(name, defaultValue)
        }
    }, [defaultValue, listenToDefaultValueChange, name, setValue])
    return <FormElementWrapper cssWidth={cssWidth} cssMargin={cssMargin}>
        <label className='label' htmlFor={htmlId}>{label}</label>
        <InputWrapper>
            <Controller
                name={name}
                control={control}
                rules={{ validate }}
                render={({ field: { onChange, value } }) => (
                    <NumberFormat
                        defaultValue={defaultValue}
                        value={value}
                        thousandSeparator={false}
                        allowNegative={false}
                        suffix="%"
                        fixedDecimalScale={false}
                        decimalScale="2"
                        onValueChange={(v) => handleChange(onChange, v.value)}
                        placeholder='0%'
                        displayType={inputType}
                    />
                )}
            />
        </InputWrapper>
        <ValidationErrorMessage hideValidationMessage={hideValidationMessage} error={error} errorMessageOverride={errorMessageOverride} />
    </FormElementWrapper>
}

export default InputPercentage