import React, { useRef, useEffect } from 'react';

const PlantOfTheMonth = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed as needed

      scrollContainer.style.animationDuration = `${animationDuration}s`;
    }
  }, []);

  const plants = [
    { name: 'Monstera Deliciosa', image: '/api/placeholder/200/200' },
    { name: 'Fiddle Leaf Fig', image: '/api/placeholder/200/200' },
    { name: 'Snake Plant', image: '/api/placeholder/200/200' },
    { name: 'Pothos', image: '/api/placeholder/200/200' },
    { name: 'ZZ Plant', image: '/api/placeholder/200/200' },
    { name: 'Peace Lily', image: '/api/placeholder/200/200' },
  ];

  return (
    <section className="bg-cultiwate-lightest py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-cultiwate-darkest mb-8">Plants of the Month</h2>
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex animate-scroll"
            style={{
              width: `${plants.length * 220}px`,
            }}
          >
            {plants.map((plant, index) => (
              <div key={index} className="w-52 flex-shrink-0 mx-2">
                <img src={plant.image} alt={plant.name} className="w-full h-52 object-cover rounded-lg shadow-md" />
                <h3 className="mt-2 text-lg font-medium text-cultiwate-dark">{plant.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheMonth;