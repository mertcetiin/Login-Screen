import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { emailSchema } from '../schema'

function LoginEmail() {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        })
        actions.resetForm();
        navigate('/loginhome');
    };

    const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: emailSchema, onSubmit
    })

    return (
        <div className='loginUser-div'>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label>Email address</label>
                    <input type='text' id='email'
                        onChange={handleChange}
                        value={values.email}
                        placeholder='Enter email'
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='input-div'>
                    <label>Password</label>
                    <input type='password' id='password'
                        onChange={handleChange}
                        value={values.password}
                        placeholder='Enter password'
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='input-div'>
                    <label>Confirm Password</label>
                    <input type='password' id='confirmPassword'
                        onChange={handleChange}
                        value={values.confirmPassword}
                        placeholder='Re-enter password'
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                </div>
                <button className='email-btn' disabled={isSubmitting} onClick={() => navigate('/')}>Username with login</button>
                <button className='login-btn' disabled={isSubmitting}>Login</button>
            </form>
        </div>
    )
}

export default LoginEmail