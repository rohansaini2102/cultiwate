import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-cultiwate-light">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl font-extrabold text-cultiwate-dark sm:text-5xl sm:tracking-tight lg:text-6xl">
              Elevate Your Space with Cultiwate
            </h1>
            <p className="mt-4 text-xl text-cultiwate">
              Discover the art of cultivating elegance through our curated collection of premium plants.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <button className="btn btn-primary mb-4 sm:mb-0 sm:mr-4">
                Explore Collection
              </button>
              <button className="btn btn-secondary">
                Learn About Care
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img src="/api/placeholder/600/400" alt="Elegant plant arrangement" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;