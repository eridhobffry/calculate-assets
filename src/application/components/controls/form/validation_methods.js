export const validationMethods = {
    //for new validation with useForm
    notEmpty: value => {
        return (value !== '' && value !== undefined && value !== null) || 'This field is required'
    },
}