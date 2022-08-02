import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import Button from '../Button/Button';
import './LoginForm.scss';

const LoginForm = ({}) => {
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
      onSubmit: (values) => {
        // setUser([
        //   {
        //     name: values.name,
        //     email: values.email,
        //     password: values.password,
        //     passwordConfirm: values.passwordConfirm,
        //   },
        // ]);
        navigate('/dashboard');
        console.log(values);
      },
      validationSchema,
    });

  return (
    <>
      <form className='login-form' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form__row'>
          <label className='visually-hidden' htmlFor='name'>
            Email
          </label>
          <input
            name='name'
            type='text'
            placeholder='Enter your name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name && (
            <div className='error'>{errors.name}</div>
          )}
        </div>

        <div className='form__row'>
          <label className='visually-hidden' htmlFor='email'>
            Email
          </label>
          <input
            name='email'
            type='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className='error'>{errors.email}</div>
          )}
        </div>

        <div className='form__row'>
          <label className='visually-hidden' htmlFor='password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            placeholder='Enter your Password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.password && (
            <div className='error'>{errors.password}</div>
          )}
        </div>

        <div className='form__row'>
          <label className='visually-hidden' htmlFor='password'>
            Password
          </label>
          <input
            name='passwordConfirm'
            type='password'
            placeholder='Enter your password again'
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.passwordConfirm && (
            <div className='error'>{errors.passwordConfirm}</div>
          )}
        </div>

        <div className='form__action'>
          <Button
            type='submit'
            btnStyle='btn--green'
            btnSize='btn--large'
            btnName='Submit'
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
