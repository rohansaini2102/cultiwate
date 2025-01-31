import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-cultiwate-lightest shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cultiwate-dark">Cultiwate</span>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-cultiwate-dark hover:text-cultiwate hover-effect px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-cultiwate-dark hover:text-cultiwate hover-effect px-3 py-2 rounded-md text-sm font-medium">Plants</a>
            <a href="#" className="text-cultiwate-dark hover:text-cultiwate hover-effect px-3 py-2 rounded-md text-sm font-medium">Care Guide</a>
            <a href="#" className="text-cultiwate-dark hover:text-cultiwate hover-effect px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;