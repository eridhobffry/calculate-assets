import React from 'react'

const FormWrapper = ({onSubmit, children}) => {

    const handleOnSubmit = e => {
        e.preventDefault()
        onSubmit(e)
    }

    return <form onSubmit={handleOnSubmit}>
        {children}
    </form>
}

export default FormWrapper