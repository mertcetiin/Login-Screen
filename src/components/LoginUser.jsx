import React from 'react'
import { useFormik } from 'formik'
import { userSchema } from '../schema'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'

function LoginUser() {

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
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: userSchema, onSubmit
    })
    return (
        <div className='loginUser-div'>
            <form onSubmit={handleSubmit}>
                <div className='input-div'>
                    <label>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={values.username}
                        onChange={handleChange}
                        placeholder='Enter username'
                        className={errors.username ? 'input-error' : ''}
                    />
                    {errors.username && <p className='error'>{errors.username}</p>}
                </div>
                <div className='input-div'>
                    <label>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                        className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='input-div'>
                    <label>Confirm Password</label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        placeholder='Re-enter password'
                        className={errors.confirmPassword ? 'input-error' : ''}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                </div>
                <button className='email-btn' onClick={() => navigate('/email')} disabled={isSubmitting} type='submit' >Login with email</button>
                <button className='login-btn' disabled={isSubmitting} type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginUser