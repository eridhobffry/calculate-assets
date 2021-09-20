import React, { Fragment, useState } from 'react'
import * as Styled from './styles'
import InputPercentage from '../input_percentage'
import SliderRange from '../slider_range'
import { isMobile } from 'react-device-detect'

const MinMaxInputRange = ({
    nameMin,
    nameMax,
    nameMinMax,
    register,
    control,
    validationMethods,
    errors,
    values = {
        minMaxValue: '',
        minValue: '',
        maxValue: ''
    },
    setValue
}) => {
    const [minMax, setMinMax] = useState(values.minMaxValue)
    const [min, setMin] = useState(values.minValue)
    const [max, setMax] = useState(values.maxValue)

    const handleMinChange = (value) => {
        const intValue = parseInt(value)
        setMin(intValue)
        setMinMax([intValue, max])
        setValue(nameMinMax, [intValue, max])
        setValue(nameMin, intValue)
    }
    const handleMaxChange = (value) => {
        const intValue = parseInt(value)
        setMax(intValue)
        setMinMax([min, intValue])
        setValue(nameMinMax, [min, intValue])
        setValue(nameMax, intValue)
    }
    const handleChangeMinMax = (value) => {
        handleMinChange(value[0])
        handleMaxChange(value[1])
    }
    return <Fragment>
        {
            isMobile ? <Styled.MinMaxInputRangeWrapper>
                <SliderRange
                    name={nameMinMax}
                    register={register}
                    control={control}
                    cssWidth={'100%'}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.nameMinMax}
                />
                <Styled.MinMaxWrapper>
                    <InputPercentage
                        label={'Min'}
                        name={nameMin}
                        register={register}
                        control={control}
                        validate={{ notEmpty: validationMethods.notEmpty }}
                        error={errors.nameMin}
                        cssWidth={'50%'}
                        onPercentageChange={value => handleMinChange(value)}
                    />
                    <InputPercentage
                        label={'Max'}
                        name={nameMax}
                        register={register}
                        control={control}
                        validate={{ notEmpty: validationMethods.notEmpty }}
                        error={errors.nameMax}
                        cssWidth={'50%'}
                        onPercentageChange={value => handleMaxChange(value)}
                    />
                </Styled.MinMaxWrapper>
            </Styled.MinMaxInputRangeWrapper> : <Styled.MinMaxInputRangeWrapper>
                <InputPercentage
                    label={'Min'}
                    name={nameMin}
                    defaultValue={min}
                    register={register}
                    control={control}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.nameMin}
                    cssWidth={'10%'}
                    onPercentageChange={value => handleMinChange(value)}
                    setValue={setValue}
                    listenToDefaultValueChange
                />
                <SliderRange
                    defaultValue={minMax}
                    name={nameMinMax}
                    register={register}
                    control={control}
                    cssWidth={'70%'}
                    setValue={setValue}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.nameMinMax}
                    onRangeChange={value => handleChangeMinMax(value)}
                    listenToDefaultValueChange
                />
                <InputPercentage
                    label={'Max'}
                    name={nameMax}
                    defaultValue={max}
                    register={register}
                    control={control}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.nameMax}
                    cssWidth={'10%'}
                        onPercentageChange={value => handleMaxChange(value)}
                        setValue={setValue}
                        listenToDefaultValueChange
                />
            </Styled.MinMaxInputRangeWrapper>
        }
        
    </Fragment>
}

export default MinMaxInputRange
