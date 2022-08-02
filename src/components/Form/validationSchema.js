import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('Zorunlu alan'),
  email: yup.string().email('Geçerli bir email girin').required('Zorunlu alan'),
  password: yup
    .string()
    .min(6, 'En az 6 rakam olmalı!')
    .required('Zorunlu alan'),
  passwordConfirm: yup
    .string()
    .min(6, 'En az 6 rakam olmalı!')
    .oneOf([yup.ref('password')], 'Password ile aynı olmalı!'),
});

export default validationSchema;
