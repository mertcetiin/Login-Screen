import React from 'react'
import { useFormik } from 'formik'
import { userSchema } from '../schema'

function LoginUser() {

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: userSchema,
    })
    return (

        <form onSubmit={handleSubmit}>
            <div className='input-div'>
                <label>Username</label>
                <input
                    type='text'
                    id='username'
                    value={values.username}
                    onChange={handleChange}
                    placeholder='Enter your username'
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
                    placeholder='Enter your password'
                />
            </div>
            <div className='input-div'>
                <label>Confirm Password</label>
                <input
                    type='password'
                    id='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='Re-enter your password'
                />
            </div>
            <div className='btn'>
                <button>Email ile giriş</button>
                <button>Login</button>
            </div>
        </form>

    )
}

export default LoginUser