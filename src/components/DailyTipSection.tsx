import React from 'react';
import { Zap } from 'lucide-react';

const DailyTipSection = () => {
  return (
    <section id="tips" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Tägliche Strategien
          </h2>
          <p className="text-gray-400 text-lg">
            Meistere das Spiel mit Experten-Tipps
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          <div className="relative bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-6">
              <Zap className="w-8 h-8 text-white animate-pulse" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Tipp des Tages
            </h3>
            
            <p className="text-gray-300 text-lg sm:text-xl text-center leading-relaxed">
              Baue immer nach oben, wenn du unter Beschuss stehst, um die Höhe zu gewinnen. Der Spieler mit dem Höhenvorteil kontrolliert das Schlachtfeld und hat bessere Winkel für Eliminierungen.
            </p>
            
            <div className="mt-8 text-center">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold">
                Profi-Strategie
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyTipSection;