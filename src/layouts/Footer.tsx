import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="mx-12 bg-gray-100 pt-4 pb-2 border-t border-black flex justify-between text-sm text-gray-600">
        <h6>Ontario, CA | <span className='font-semibold'>11:55</span></h6>
        <h6><span className='font-semibold'>Designed</span> by Idris Yakub</h6>
      </footer>
    </>
  );
};

export default Footer;
