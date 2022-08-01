import React from 'react';
import './Button.scss';

const Button = ({ type, onClick, btnName, btnStyle, btnSize }) => {
  return (
    <>
      <button
        className={`btn ${btnStyle} ${btnSize}`}
        onClick={onClick}
        type={type}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
