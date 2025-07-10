import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="pt-4 pb-2 px-12 border-t flex justify-between text-sm text-gray-600 bg-gray-100">
        <h6>Ontario, CA | <span className='font-semibold'>11:55</span></h6>
        <h6><span className='font-semibold'>Designed</span> by Idris Yakub</h6>
      </footer>
    </>
  );
};

export default Footer;
