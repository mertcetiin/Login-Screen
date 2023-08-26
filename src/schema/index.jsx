import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const userSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username must be at least 4 characters long')
        .required('Username is required'),
    password: yup
        .string()
        .min(5, 'Lütfen min 5 karakter giriniz')
        .matches(passwordRules, {
            message: 'Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz',
        })
        .required('Şifre girmek zorunludur'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Tekrar şifre girmek zorunludur')
})