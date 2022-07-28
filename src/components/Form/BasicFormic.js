import { Formik, Field, Form } from 'formik';

const BasicFormic = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {
          console.log(values, null, 2);
        }}
      >
        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='Jane' />
          <br />
          <br />
          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Doe' />
          <br />
          <br />
          <label htmlFor='email'>Email</label>
          <Field
            id='email'
            name='email'
            placeholder='jane@acme.com'
            type='email'
          />
          <br />
          <br />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicFormic;
