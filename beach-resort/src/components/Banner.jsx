import React from 'react'

const Banner = ({children, title, subtitle}) => {
  return (
    <div className='bannar'>
        <h1>{title}</h1>
        <div/>
        <p>{subtitle}</p>
        {children}
    </div>
  );
};

export default Banner;
