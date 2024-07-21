import React from 'react';

const BestSellers = () => {
  const plants = [
    { name: 'Snake Plant', image: '/api/placeholder/200/200', price: '100' },
    { name: 'Fiddle Leaf Fig', image: '/api/placeholder/200/200', price: '100' },
    { name: 'Pothos', image: '/api/placeholder/200/200', price: '100' },
    { name: 'ZZ Plant', image: '/api/placeholder/200/200', price: '100' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-cultiwate-darkest mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-cultiwate-lightest rounded-lg shadow-md overflow-hidden">
              <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium text-cultiwate-dark">{plant.name}</h3>
                <p className="text-cultiwate-darkest font-bold mt-2">{plant.price}</p>
                <button className="btn btn-primary mt-4 w-full">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;