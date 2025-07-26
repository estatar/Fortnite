import React from 'react';
import { Zap } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fortnite Täglich
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Start
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('tips')}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Tipps
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Kontakt
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <div className="flex space-x-4">
              <button
                onClick={() => scrollToSection('events')}
                className="text-gray-300 hover:text-purple-400 text-sm font-medium"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('tips')}
                className="text-gray-300 hover:text-purple-400 text-sm font-medium"
              >
                Tipps
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-purple-400 text-sm font-medium"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;