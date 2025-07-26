import React from 'react';
import { Star } from 'lucide-react';

const FeaturedSkinsSection = () => {
  const skins = [
    {
      name: "Galaxis-Späher",
      description: "Epischer Skin - Verfügbar im Item-Shop",
      image: "https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?auto=compress&cs=tinysrgb&w=600",
      rarity: "Episch"
    },
    {
      name: "Abtrünniger Räuber",
      description: "Legendärer Skin - Season 1 Exklusiv",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600",
      rarity: "Legendär"
    },
    {
      name: "Neo Versa",
      description: "Seltener Skin - PlayStation Exklusiv",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600",
      rarity: "Selten"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendär':
        return 'from-yellow-500 to-orange-500';
      case 'Episch':
        return 'from-purple-500 to-pink-500';
      case 'Selten':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Beliebte Skins
          </h2>
          <p className="text-gray-400 text-lg">
            Entdecke die begehrtesten Kosmetika
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skins.map((skin, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
              
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{skin.name}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${getRarityColor(skin.rarity)} rounded-full`}>
                      <Star className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{skin.rarity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{skin.description}</p>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                    Details anzeigen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkinsSection;