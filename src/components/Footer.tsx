import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 px-8 text-center">
      &copy; {currentYear} Rathawut.com All rights reserved.
    </footer>
  );
};

export default Footer;
