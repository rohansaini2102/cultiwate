import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BestSellers from './components/BestSellers';
import Newsletter from './components/Newsletter';
import PlantOfTheMonth from './components/PlantOfTheMonth';
import './styles/custom.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <BestSellers />
        <PlantOfTheMonth />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;