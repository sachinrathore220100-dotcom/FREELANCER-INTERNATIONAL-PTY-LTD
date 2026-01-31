
import React from 'react';
import { DRIVE_ID_COUPLE, DRIVE_ID_AYUSH, DRIVE_ID_EKANSHI, getDriveImage } from '../constants';

const Gallery: React.FC = () => {
  const images = [
    { src: getDriveImage(DRIVE_ID_COUPLE), title: 'Forever Together', span: 'col-span-2 row-span-2' },
    { src: getDriveImage(DRIVE_ID_AYUSH), title: 'The Groom', span: 'col-span-1 row-span-1' },
    { src: getDriveImage(DRIVE_ID_EKANSHI), title: 'The Bride', span: 'col-span-1 row-span-1' },
    { src: "https://picsum.photos/600/600?random=1", title: 'Joyful Moments', span: 'col-span-1 row-span-1' },
    { src: "https://picsum.photos/600/600?random=2", title: 'Laughter', span: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className={`relative group overflow-hidden rounded-2xl shadow-lg ${img.span}`}
        >
          <img 
            src={img.src} 
            alt={img.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://picsum.photos/800/800?random=${idx + 5}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <h4 className="text-white font-serif text-xl tracking-wider">{img.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
