import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import SourcingStory from './components/SourcingStory';
import Testimonials from './components/Testimonials';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <SourcingStory />
      <Testimonials />
    </main>
  );
};

export default Home;