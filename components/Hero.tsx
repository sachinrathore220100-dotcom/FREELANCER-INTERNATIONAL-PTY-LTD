
import React from 'react';
import { WEDDING_DETAILS, DRIVE_ID_COUPLE, getDriveImage } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
      {/* Background Mandala (Animated Rotate) */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="w-[120vw] h-[120vw] max-w-none border-[40px] border-[#800000] rounded-full animate-[spin_60s_linear_infinite]"></div>
      </div>

      <div className="z-10 max-w-4xl animate-fade-in-up">
        {/* Shloka */}
        <div className="mb-6">
          <p className="text-[#800000] font-bold text-xl mb-2">{WEDDING_DETAILS.shloka.hindi}</p>
          <p className="font-serif italic text-lg text-[#800000] px-4 max-w-2xl mx-auto leading-relaxed">
            "{WEDDING_DETAILS.shloka.sanskrit}"
          </p>
        </div>

        {/* Invitation Text */}
        <p className="font-serif text-gray-700 tracking-[0.2em] uppercase text-xs md:text-sm mb-8">
          With the blessings of Lord Ganesha and our elders, we invite you to celebrate
        </p>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <div className="text-center">
            <h1 className="font-cursive text-6xl md:text-8xl text-[#800000] leading-tight">Ayush</h1>
            <p className="font-serif text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              Son of {WEDDING_DETAILS.groom.parents}
            </p>
          </div>
          
          <div className="font-cursive text-4xl md:text-5xl text-[#d4af37] shimmer">&</div>
          
          <div className="text-center">
            <h1 className="font-cursive text-6xl md:text-8xl text-[#800000] leading-tight">Ekanshi</h1>
            <p className="font-serif text-xs md:text-sm text-gray-500 uppercase tracking-widest">
              Daughter of {WEDDING_DETAILS.bride.parents}
            </p>
          </div>
        </div>

        {/* Main Photo Frame */}
        <div className="relative group max-w-md mx-auto mb-12 px-6">
            <div className="absolute inset-0 bg-[#d4af37] rotate-3 rounded-2xl opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-[#800000] -rotate-3 rounded-2xl opacity-10 group-hover:-rotate-6 transition-transform duration-500"></div>
            <img 
              src={getDriveImage(DRIVE_ID_COUPLE)} 
              alt="Ayush & Ekanshi"
              className="relative rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-[450px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/800/1000?random=1";
              }}
            />
        </div>

        <div className="font-serif text-xl md:text-2xl text-[#800000] tracking-widest border-y border-[#d4af37]/30 py-4 inline-block">
          February 5th, 2026
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="mt-12 animate-bounce">
        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
