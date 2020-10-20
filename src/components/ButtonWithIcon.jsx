import React from 'react';

const ButtonWithIcon = ({ text, onClick }) => {
  return (
    <button className='button primary' onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonWithIcon;
