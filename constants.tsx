
import React from 'react';

export const DRIVE_ID_COUPLE = '10Eceo97QPKe4sb8-JaqA9JcSORRB5r3W';
export const DRIVE_ID_AYUSH = '1moaaNw5VixB_YIdp0cEj1QuV3Dp6WwDk';
export const DRIVE_ID_EKANSHI = '16_98xmRzcGn_sBtlFv3MJ4mXRjUHIjmn';

// Helper to convert Google Drive share links to direct images (limited reliability but common trick)
export const getDriveImage = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const WEDDING_DETAILS = {
  groom: {
    name: 'Ayush Patel',
    parents: 'Shri Ramdin Patel & Smt. Priti Patel',
    photo: getDriveImage(DRIVE_ID_AYUSH)
  },
  bride: {
    name: 'Ekanshi Katiyar',
    parents: 'Shri Rajiv Katiyar & Smt. Sunita Katiyar',
    photo: getDriveImage(DRIVE_ID_EKANSHI)
  },
  events: [
    {
      title: 'Haldi & Bhooj',
      date: '3rd February 2026',
      day: 'Tuesday',
      location: 'Patel Garden, Gursarai',
      mapUrl: 'https://maps.app.goo.gl/pny77XsgD8BvaNHL7',
      icon: '🌼',
      color: 'bg-yellow-50 text-yellow-800 border-yellow-200'
    },
    {
      title: 'Mehendi Ceremony',
      date: '4th February 2026',
      day: 'Wednesday',
      location: 'Own House',
      mapUrl: 'https://maps.app.goo.gl/sC3fHQDbc918QcZW7',
      icon: '🌿',
      color: 'bg-green-50 text-green-800 border-green-200'
    },
    {
      title: 'Baraat Departure',
      date: '5th February 2026',
      day: 'Thursday',
      location: 'From Own House',
      mapUrl: 'https://maps.app.goo.gl/sC3fHQDbc918QcZW7',
      icon: '🚩',
      color: 'bg-red-50 text-red-800 border-red-200'
    },
    {
      title: 'Marriage Ceremony',
      date: '5th February 2026',
      day: 'Thursday',
      location: 'Anamika Palace',
      mapUrl: 'https://maps.app.goo.gl/PhZk9WGZV6sQ65zz7',
      icon: '💍',
      color: 'bg-rose-50 text-rose-800 border-rose-200'
    }
  ],
  shloka: {
    sanskrit: 'वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥',
    hindi: '॥ श्री गणेशाय नमः ॥ 🪔'
  }
};
