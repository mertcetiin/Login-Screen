import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username must be at least 4 characters long')
        .required('Username is required'),
})