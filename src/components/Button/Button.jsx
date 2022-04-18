import React from 'react';
import s from './Button.module.css';
const Button = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
