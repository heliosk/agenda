import React from 'react';

import IcLogo from '../images/ic-logo.svg';
import IcSearch from '../images/ic-search.svg';

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={IcLogo} alt='logo' />
      </div>
      <div className='search'>
        <input type='text' placeholder='Buscar...' />
        <img src={IcSearch} alt='buscar' />
      </div>
    </header>
  );
};

export default Header;
