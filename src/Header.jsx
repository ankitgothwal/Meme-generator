import React from 'react';
import trollimg from './assets/image.png';

const Header = () => {
  return (
    <header className="header">
      <img 
        src={trollimg}
        alt="Meme Icon" 
        className="logo"
      />
      <h1 className="title">Meme Generator</h1>
    </header>
  );
};

export default Header;
