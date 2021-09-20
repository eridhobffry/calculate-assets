import React, { Fragment } from 'react'
import * as Styled from '../styles'
import { Form } from 'application/components/controls'
import { useForm } from 'react-hook-form'
import { validationMethods } from 'application/components/controls/form'
import { isMobile } from 'react-device-detect'

const Forms = () => {
    const range = [0, 100]
    const defaultValues = {
        withdrawls: '',
        deposit: '',
        inflation: '',
        rangeStockMarket: range,
        minStockMarket: range[0] === 0 ? 0 : parseInt(range[0]),
        maxStockMarket: parseInt(range[1]),
    }

    const { register, formState: { errors }, handleSubmit, getValues, control, watch, setValue } = useForm({ defaultValues })

    return <Fragment>
        <Styled.FormsContainer>
            <Styled.InputNumberGroupWrapper>
                <Form.InputPercentage
                    label={'Withdrawls p.a.'}
                    name='withdrawls'
                    register={register}
                    control={control}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.withdrawls}
                    cssWidth={isMobile ? '100%' : '30%'}
                />
                <Form.InputPercentage
                    label={'Deposit p.a.'}
                    name='deposit'
                    register={register}
                    control={control}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.deposit}
                    cssWidth={isMobile ? '100%' : '30%'}
                />
                <Form.InputPercentage
                    label={'Inflation p.a.'}
                    name='inflation'
                    register={register}
                    control={control}
                    validate={{ notEmpty: validationMethods.notEmpty }}
                    error={errors.inflation}
                    cssWidth={isMobile ? '100%' : '30%'}
                />
            </Styled.InputNumberGroupWrapper>
            <Styled.SliderGroupWrapper>
                <Form.MinMaxInputRange
                    nameMinMax='rangeStockMarket'
                    nameMin='minStockMarket'
                    nameMax='maxStockMarket'
                    register={register}
                    control={control}
                    validationMethods={validationMethods}
                    errors={errors}
                    values={{
                        minMaxValue: getValues().rangeStockMarket,
                        minValue: getValues().minStockMarket,
                        maxValue: getValues().maxStockMarket,
                    }}
                    setValue={setValue}
                />
                <Form.MinMaxInputRange
                    nameMinMax='rangeStockMarket'
                    nameMin='minStockMarket'
                    nameMax='maxStockMarket'
                    register={register}
                    control={control}
                    validationMethods={validationMethods}
                    errors={errors}
                    values={{
                        minMaxValue: getValues().rangeStockMarket,
                        minValue: getValues().minStockMarket,
                        maxValue: getValues().maxStockMarket,
                    }}
                    setValue={setValue}
                />
                <Form.MinMaxInputRange
                    nameMinMax='rangeStockMarket'
                    nameMin='minStockMarket'
                    nameMax='maxStockMarket'
                    register={register}
                    control={control}
                    validationMethods={validationMethods}
                    errors={errors}
                    values={{
                        minMaxValue: getValues().rangeStockMarket,
                        minValue: getValues().minStockMarket,
                        maxValue: getValues().maxStockMarket,
                    }}
                    setValue={setValue}
                />
            </Styled.SliderGroupWrapper>
        </Styled.FormsContainer>
    </Fragment>
}

export default Forms
