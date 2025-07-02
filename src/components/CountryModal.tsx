import React from 'react';

const CountryModal: React.FC<{
  countries: any[];
  onClose: () => void;
  onSelect: (country: any) => void;
  selected: any;
}> = ({ countries, onClose, onSelect, selected }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-40">
      <div className="w-full max-w-md bg-white rounded-t-3xl p-4 pb-8 shadow-lg animate-slide-up">
        <div className="flex justify-center mb-2">
          <div className="w-16 h-1 bg-gray-300 rounded-full" />
        </div>
        <button className="absolute top-4 right-6 text-2xl" onClick={onClose}>×</button>
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
              <span className="text-2xl">{country.flag}</span>
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