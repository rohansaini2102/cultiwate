import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cultiwate-darkest text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold">Cultiwate</h3>
            <p className="mt-2 text-cultiwate-light">Nurturing nature, cultivating elegance</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#" className="text-cultiwate-light hover:text-white hover-effect">About Us</a>
            <a href="#" className="text-cultiwate-light hover:text-white hover-effect">FAQ</a>
            <a href="#" className="text-cultiwate-light hover:text-white hover-effect">Privacy Policy</a>
            <a href="#" className="text-cultiwate-light hover:text-white hover-effect">Terms of Service</a>
          </div>
        </div>
        <div className="mt-8 border-t border-cultiwate-dark pt-8 text-center text-sm text-cultiwate-light">
          <p>&copy; 2024 Cultiwate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;