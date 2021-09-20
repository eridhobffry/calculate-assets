import React, { Fragment } from 'react'
import * as Styled from '../styles'
import { Button, Form } from 'application/components/controls'
import { useForm } from 'react-hook-form'
import { validationMethods } from 'application/components/controls/form'
import { isMobile } from 'react-device-detect'
import { Spacer } from 'application/components/common'
import { formDataMapper, resetValue } from './form_data'

const Forms = (props) => {
    const { onCalculateAssets, requestFormPayload } = props
    const defaultValues = formDataMapper(requestFormPayload)

    const { register, formState: { errors }, handleSubmit, getValues, control, setValue } = useForm({ defaultValues })
    const onSubmitSuccess = () => {
        onCalculateAssets(getValues())
    }
    const clearAssets = () => {
        resetValue(setValue)
    }
    return <Fragment>
        <Styled.FormsContainer>
            <Spacer px='25' />
            <h2>
                Asset Classes
            </h2>
            <p>
                Please choose the minimum and maximum desired exposure in each asset class:
            </p>
            <Spacer px='25' />
            <Form.FormWrapper onSubmit={handleSubmit(onSubmitSuccess)}>
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
                        label='Stock Market'
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
                        label='Private Equility'
                        nameMinMax='rangePrivateEquility'
                        nameMin='minPrivateEquility'
                        nameMax='maxPrivateEquility'
                        register={register}
                        control={control}
                        validationMethods={validationMethods}
                        errors={errors}
                        values={{
                            minMaxValue: getValues().rangePrivateEquility,
                            minValue: getValues().minPrivateEquility,
                            maxValue: getValues().maxPrivateEquility,
                        }}
                        setValue={setValue}
                    />
                    <Form.MinMaxInputRange
                        label='Real Estate'
                        nameMinMax='rangeRealEstate'
                        nameMin='minRealEstate'
                        nameMax='maxRealEstate'
                        register={register}
                        control={control}
                        validationMethods={validationMethods}
                        errors={errors}
                        values={{
                            minMaxValue: getValues().rangeRealEstate,
                            minValue: getValues().minRealEstate,
                            maxValue: getValues().maxRealEstate,
                        }}
                        setValue={setValue}
                    />
                </Styled.SliderGroupWrapper>
                <input type='submit' style={{ display: 'none' }} />
                <Spacer px='25' />
                <Styled.ButtonWrapper>
                    <Button onButtonClick={clearAssets} buttonText={'Clear'} />
                    <Button secondary onButtonClick={onSubmitSuccess} buttonText={'Calculate'} />
                </Styled.ButtonWrapper>
            </Form.FormWrapper>
        </Styled.FormsContainer>
    </Fragment>
}

export default Forms
