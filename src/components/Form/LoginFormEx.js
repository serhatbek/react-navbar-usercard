import { useFormik } from 'formik';
import validationSchema from './validationSchema';

const LoginForm = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
      onSubmit: (values) => {
        console.log(values, null, 2);
      },
      validationSchema,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className='form__row'>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          placeholder='jane@acme.com'
          type='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
      </div>

      <div className='form__row'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.password && <div>{errors.password}</div>}
      </div>

      <div className='form__row'>
        <label htmlFor='passwordConfirm'>Password</label>
        <input
          type='password'
          name='passwordConfirm'
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.passwordConfirm && (
          <div>{errors.passwordConfirm}</div>
        )}
      </div>

      <div className='form__action'>
        <button type='submit'>Submit</button>
      </div>

      <div>{JSON.stringify(values)}</div>
    </form>
  );
};

export default LoginForm;
