import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import EventTracker from './components/EventTracker';
import DailyTipSection from './components/DailyTipSection';
import FeaturedSkinsSection from './components/FeaturedSkinsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <EventTracker />
      <DailyTipSection />
      <FeaturedSkinsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;