
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import BlessingWall from './components/BlessingWall';
import { WEDDING_DETAILS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'events', 'gallery', 'blessings'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gold-200 shadow-sm px-4 py-3 flex justify-center space-x-4 md:space-x-8 text-xs md:text-sm font-bold uppercase tracking-widest text-[#800000]">
        {['home', 'events', 'gallery', 'blessings'].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            className={`transition-all duration-300 ${activeSection === section ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'hover:text-[#d4af37]'}`}
          >
            {section}
          </button>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-[#800000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-8 shimmer">The Celebration Begins In...</h2>
          <Countdown targetDate={new Date('2026-02-05T00:00:00')} />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-[#fdfaf5] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <img src="https://picsum.photos/400/400?random=10" alt="decoration" className="rounded-full blur-xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-[#800000] mb-2">Our Wedding Ceremonies</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto font-serif italic text-lg">
              "Love is not about how many days, months, or years you have been together. It is all about how much you love each other every single day."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {WEDDING_DETAILS.events.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cursive text-5xl text-[#800000] mb-2">Capturing Moments</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Blessings Section */}
      <section id="blessings" className="py-20 bg-[#fdfaf5]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-cursive text-5xl text-[#800000] mb-2">Blessings Wall</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
            <p className="text-gray-700 font-serif text-lg">
              Your presence and blessings are our greatest gift. Leave a message for the beautiful couple.
            </p>
          </div>
          <BlessingWall />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#800000] text-center text-white/80">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="font-cursive text-4xl mb-4 text-[#d4af37]">Ayush & Ekanshi</h3>
          <p className="mb-8 font-serif italic">#AyushWedsEkanshi2026</p>
          <div className="w-12 h-px bg-[#d4af37]/50 mx-auto mb-8"></div>
          <p className="text-sm tracking-widest uppercase">Created with Love for a Lifetime</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
