
import React from 'react';

interface EventProps {
  event: {
    title: string;
    date: string;
    day: string;
    location: string;
    mapUrl: string;
    icon: string;
    color: string;
  };
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className={`relative p-8 rounded-3xl border ${event.color} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden`}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 blur-3xl -mr-10 -mt-10 rounded-full"></div>
      
      <div className="flex items-start justify-between mb-6">
        <div className="text-4xl">{event.icon}</div>
        <div className="text-right">
          <p className="font-bold tracking-tighter text-sm uppercase opacity-60">{event.day}</p>
          <p className="font-serif font-bold text-lg">{event.date}</p>
        </div>
      </div>

      <h3 className="font-cursive text-4xl mb-4 text-[#800000]">{event.title}</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <p className="font-serif text-gray-700 italic">{event.location}</p>
        </div>

        <a 
          href={event.mapUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#d4af37] text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest hover:bg-[#800000] transition-colors shadow-lg"
        >
          View on Maps
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
