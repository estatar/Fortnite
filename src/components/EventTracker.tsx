import React from 'react';
import { Calendar, Clock, Zap, Gift, Trophy, Star } from 'lucide-react';

const EventTracker = () => {
  const events = [
    {
      title: "Winterfest 2025",
      description: "Kostenlose Geschenke täglich abholen",
      date: "2025-01-15",
      time: "19:00",
      status: "live",
      type: "event",
      icon: Gift,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Item Shop Reset",
      description: "Neue Skins und Emotes verfügbar",
      date: "2025-01-16",
      time: "01:00",
      status: "upcoming",
      type: "shop",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ranked Season Ende",
      description: "Letzte Chance auf Belohnungen",
      date: "2025-01-20",
      time: "10:00",
      status: "upcoming",
      type: "competitive",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Update v28.20",
      description: "Neue Waffen und Map-Änderungen",
      date: "2025-01-18",
      time: "11:00",
      status: "upcoming",
      type: "update",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-500 text-white animate-pulse';
      case 'upcoming':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'live':
        return 'LIVE';
      case 'upcoming':
        return 'BALD';
      default:
        return 'TBA';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getTimeUntilEvent = (dateString: string, timeString: string) => {
    const eventDate = new Date(`${dateString}T${timeString}`);
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
    
    if (diff < 0) return 'Läuft jetzt';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `in ${days}d ${hours}h`;
    return `in ${hours}h`;
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Event Tracker
          </h2>
          <p className="text-gray-300 text-lg">
            Verpasse keine wichtigen Events und Updates
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${event.color} rounded-xl`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(event.status)}`}>
                      {getStatusText(event.status)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{event.time} Uhr</span>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <span className="text-xs font-semibold text-purple-300">
                        {getTimeUntilEvent(event.date, event.time)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full">
            <Zap className="w-5 h-5 text-purple-400 mr-2 animate-pulse" />
            <span className="text-purple-300 font-semibold">
              Automatisch aktualisiert alle 5 Minuten
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTracker;