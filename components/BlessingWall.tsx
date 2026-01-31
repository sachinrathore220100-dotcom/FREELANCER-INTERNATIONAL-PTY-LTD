
import React, { useState } from 'react';
import { generateBlessingResponse, BlessingResponse } from '../services/geminiService';

interface BlessingEntry {
  name: string;
  message: string;
  aiResponse?: BlessingResponse;
}

const BlessingWall: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [blessings, setBlessings] = useState<BlessingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setIsLoading(true);
    const aiResp = await generateBlessingResponse(name, message);
    
    const newBlessing: BlessingEntry = {
      name,
      message,
      aiResponse: aiResp || undefined
    };

    setBlessings([newBlessing, ...blessings]);
    setName('');
    setMessage('');
    setIsLoading(false);
  };

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl shadow-xl border-t-4 border-[#d4af37]">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-[#800000] font-bold text-sm tracking-widest uppercase mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#fdfaf5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
              placeholder="E.g., Shri Rahul Sharma"
              required
            />
          </div>
          <div>
            <label className="block text-[#800000] font-bold text-sm tracking-widest uppercase mb-2">Message of Love</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#fdfaf5] border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all min-h-[120px]"
              placeholder="Wishing you a lifetime of happiness..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-[#800000] text-white font-bold py-4 rounded-xl tracking-[0.2em] uppercase transition-all shadow-lg active:scale-95 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#d4af37]'}`}
          >
            {isLoading ? 'Blessing is being prepared...' : 'Send Blessings'}
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {blessings.length === 0 ? (
          <div className="text-center py-10 text-gray-400 italic font-serif">
            Be the first to bless the couple!
          </div>
        ) : (
          blessings.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-l-8 border-[#d4af37] animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-serif font-bold text-[#800000] text-lg">{b.name}</h4>
                <span className="text-xs text-gray-400 uppercase tracking-tighter">Just Now</span>
              </div>
              <p className="text-gray-700 italic mb-4">"{b.message}"</p>
              
              {b.aiResponse && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full bg-[#800000] flex items-center justify-center text-white text-[10px] shrink-0 font-bold">A&E</div>
                   <div className="bg-[#fdfaf5] p-4 rounded-xl text-sm text-[#800000]">
                      <p className="font-bold mb-1">{b.aiResponse.blessing}</p>
                      <p className="font-cursive text-lg shimmer">"{b.aiResponse.poeticNote}"</p>
                   </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlessingWall;
