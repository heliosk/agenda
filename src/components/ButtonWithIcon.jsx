import React from 'react';

const ButtonWithIcon = ({ text, icon, styles, onClick }) => {
  return (
    <button className={`button ${styles}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
};

export default ButtonWithIcon;
