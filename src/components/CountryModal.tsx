import React, { useRef } from 'react';

const CountryModal: React.FC<{
  countries: any[];
  onClose: () => void;
  onSelect: (country: any) => void;
  selected: any;
}> = ({ countries, onClose, onSelect, selected }) => {
  const startY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startY.current !== null) {
      const endY = e.changedTouches[0].clientY;
      if (endY - startY.current > 60) { // swipe vers le bas
        onClose();
      }
    }
    startY.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-40"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-md bg-white rounded-t-3xl p-4 pb-8 shadow-lg animate-slide-up">
        <div className="flex justify-center mb-2">
          <div className="w-16 h-1 bg-gray-300 rounded-full" />
        </div>
        <div className="text-center text-gray-600 text-sm mb-4">
          Connaître votre pays de résidence nous permet de vous proposer uniquement les partages disponibles dans votre zone géographique.
        </div>
        <ul className="max-h-80 overflow-y-auto">
          {countries.map((country) => (
            <li
              key={country.code}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 rounded-lg ${selected.code === country.code ? 'bg-gray-100 font-bold' : ''}`}
              onClick={() => onSelect(country)}
            >
              <img src={country.flag} alt={country.name} className="w-6 h-6 rounded-full object-cover" />
              <span className="flex-1 text-left">{country.name}</span>
              <span className="text-gray-400">{country.dial}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryModal; 