import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-500/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Fortnite Täglich
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2025 Fortnite Täglich – Inoffizielle Fan-App</span>
            <span className="hidden sm:inline">•</span>
            <div className="hidden sm:flex items-center space-x-1">
              <span>Gemacht mit</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>für die Community</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>Nicht verbunden mit Epic Games</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;