import React from 'react';
import gemLogo from '../imagenes/GEM Seeders.bmp'

const Logo = (props) => (
  <div className='gem-logo-contenedor'>
    <img
      src={gemLogo}
      className='gem-logo'
      alt='Logo de GEM'
    />
  </div>
);
  
export default Logo;