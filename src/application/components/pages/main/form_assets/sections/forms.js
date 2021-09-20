import React, { Fragment } from 'react'
import * as Styled from '../styles'
import { Form } from 'application/components/controls'
import { useForm } from 'react-hook-form'
import { validationMethods } from 'application/components/controls/form'
import { isMobile } from 'react-device-detect'

const Forms = () => {
    const defaultValues = {
        withdrawls: '',
        deposit: '',
        inflation: ''
    }

    const { register, formState: { errors }, handleSubmit, getValues, control, watch } = useForm({ defaultValues })

    console.log('ER:: watch', watch())
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
        </Styled.FormsContainer>
    </Fragment>
}

export default Forms
