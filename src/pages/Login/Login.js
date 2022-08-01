import React from 'react';
import LoginForm from '../../components/Form/LoginForm';
import './Login.scss';

const Login = ({ setUser }) => {
  return (
    <div className='login'>
      <div className='container'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
