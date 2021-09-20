import React, { useEffect } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { FormElementWrapper } from '../styles';
import { nanoid } from 'nanoid';
import { Controller } from 'react-hook-form';
import { ValidationErrorMessage } from '../../../common/validation_error_message';
import { withTheme } from 'styled-components';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range)

const SliderRangeComponent = ({ setValue, listenToDefaultValueChange = false, theme, label, name, validate = {}, error, hideValidationMessage = false, control, errorMessageOverride = '', cssWidth = '100%', cssMargin = '0', minValue, maxValue, onRangeChange = () => { }, defaultValue = [0, 100] }) => {
    const htmlId = nanoid()
    const handleChange = (onChange, value) => {
        onChange(value)
        onRangeChange(value)
        setValue(name, value)
    }
    useEffect(() => {
        if (listenToDefaultValueChange) {
            setValue(name, defaultValue)
        }
    }, [defaultValue, listenToDefaultValueChange, name, setValue])
    return <FormElementWrapper justifyContent='center' cssWidth={cssWidth} cssMargin={cssMargin}>
        {
            label !== '' && <label className='label' htmlFor={htmlId}>{label}</label>
        }
        <Controller
            name={name}
            control={control}
            rules={{ validate }}
            render={({ field: { onChange, value } }) => (
                <Range
                    defaultValue={defaultValue}
                    value={value}
                    min={minValue}
                    max={maxValue}
                    onChange={(value) => handleChange(onChange, value)}
                    trackStyle={[{ backgroundColor: theme.color.primary, height: 7, borderRadius: 0 }]}
                    railStyle={{ backgroundColor: theme.color.color15, height: 7, borderRadius: 0}}
                    dotStyle={{ backgroundColor: theme.color.primary }}
                    activeDotStyle={{ backgroundColor: theme.color.primary }}
                    handleStyle={{
                        borderColor: theme.color.color15,
                        height: 16,
                        width: 16,
                        backgroundColor: theme.color.primary,
                    }}
                />
            )}
        />
        <ValidationErrorMessage hideValidationMessage={hideValidationMessage} error={error} errorMessageOverride={errorMessageOverride} />
    </FormElementWrapper>
}

export default withTheme(SliderRangeComponent)
