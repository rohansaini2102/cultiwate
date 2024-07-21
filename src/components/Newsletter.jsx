import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-cultiwate-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-cultiwate-darkest mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-cultiwate-dark mb-8">Stay updated with our latest plants and care tips!</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cultiwate"
              />
              <button type="submit" className="btn btn-primary rounded-l-none">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;