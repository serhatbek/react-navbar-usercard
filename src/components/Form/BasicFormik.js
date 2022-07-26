import { useFormik } from 'formik';

const BasicFormik = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: 'Toprak',
      lastName: 'Bek',
      email: 'ggg@gmail.com',
      gender: 'male',
      hobbies: [],
      country: '',
    },
    onSubmit: (values) => {
      console.log(values, null, 2);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form__row'>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            placeholder='Jane'
            onChange={handleChange}
            value={values.firstName}
          />
        </div>

        <div className='form__row'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            placeholder='Doe'
            onChange={handleChange}
            value={values.lastName}
          />
        </div>

        <div className='form__row'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            placeholder='jane@acme.com'
            onChange={handleChange}
            type='email'
            value={values.email}
          />
        </div>

        <div className='form__radio'>
          <label htmlFor='gender'>Gender</label>
          <br />
          <span>Male</span>
          <input
            type='radio'
            name='gender'
            value='male'
            onChange={handleChange}
            checked={values.gender === 'male'}
          />
          <br />

          <span>Female</span>
          <input
            type='radio'
            name='gender'
            value='female'
            onChange={handleChange}
            checked={values.gender === 'female'}
          />
        </div>

        <div className='form__checkbox'>
          <div>
            Painting
            <input
              type='checkbox'
              name='hobbies'
              value='Painting'
              onChange={handleChange}
            />
          </div>
          <div>
            Reading
            <input
              type='checkbox'
              name='hobbies'
              value='Reading'
              onChange={handleChange}
            />
          </div>
          <div>
            Plants
            <input
              type='checkbox'
              name='hobbies'
              value='Plants'
              onChange={handleChange}
            />
          </div>
          <div>
            Movies
            <input
              type='checkbox'
              name='hobbies'
              value='Movies'
              onChange={handleChange}
            />
          </div>
        </div>

        <select name='country' value={values.country} onChange={handleChange}>
          <option value='tr'>Türkiye</option>
          <option value='usa'>Amerika</option>
          <option value='en'>İngiltere</option>
        </select>

        <div className='form__action'>
          <button type='submit'>Submit</button>
        </div>

        <div>{JSON.stringify(values)}</div>
      </form>
    </div>
  );
};

export default BasicFormik;
