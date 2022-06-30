import React from 'react';

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-auto pt-6">
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © {date.getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
