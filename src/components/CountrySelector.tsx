import React, { useState } from 'react';
import CountryModal from '../components/CountryModal';

const countries = [
    { code: 'FR', name: 'France', flag: '🇫🇷', dial: '+33' },
    { code: 'DE', name: 'Allemagne', flag: '🇩🇪', dial: '+49' },
    { code: 'IT', name: 'Italie', flag: '🇮🇹', dial: '+39' },
    { code: 'ES', name: 'Espagne', flag: '🇪🇸', dial: '+34' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹', dial: '+351' },
    { code: 'BE', name: 'Belgique', flag: '🇧🇪', dial: '+32' },
    { code: 'NL', name: 'Pays-Bas', flag: '🇳🇱', dial: '+31' },
    { code: 'LU', name: 'Luxembourg', flag: '🇱🇺', dial: '+352' },
    { code: 'CH', name: 'Suisse', flag: '🇨🇭', dial: '+41' },
    { code: 'AT', name: 'Autriche', flag: '🇦🇹', dial: '+43' },
    { code: 'IE', name: 'Irlande', flag: '🇮🇪', dial: '+353' },
    { code: 'DK', name: 'Danemark', flag: '🇩🇰', dial: '+45' },
    { code: 'SE', name: 'Suède', flag: '🇸🇪', dial: '+46' },
    { code: 'FI', name: 'Finlande', flag: '🇫🇮', dial: '+358' },
    { code: 'NO', name: 'Norvège', flag: '🇳🇴', dial: '+47' },
    { code: 'IS', name: 'Islande', flag: '🇮🇸', dial: '+354' },
    { code: 'GR', name: 'Grèce', flag: '🇬🇷', dial: '+30' },
    { code: 'PL', name: 'Pologne', flag: '🇵🇱', dial: '+48' },
    { code: 'CZ', name: 'République tchèque', flag: '🇨🇿', dial: '+420' },
    { code: 'SK', name: 'Slovaquie', flag: '🇸🇰', dial: '+421' },
    { code: 'HU', name: 'Hongrie', flag: '🇭🇺', dial: '+36' },
    { code: 'RO', name: 'Roumanie', flag: '🇷🇴', dial: '+40' },
    { code: 'BG', name: 'Bulgarie', flag: '🇧🇬', dial: '+359' },
    { code: 'HR', name: 'Croatie', flag: '🇭🇷', dial: '+385' },
    { code: 'SI', name: 'Slovénie', flag: '🇸🇮', dial: '+386' },
    { code: 'EE', name: 'Estonie', flag: '🇪🇪', dial: '+372' },
    { code: 'LV', name: 'Lettonie', flag: '🇱🇻', dial: '+371' },
    { code: 'LT', name: 'Lituanie', flag: '🇱🇹', dial: '+370' },
    { code: 'MT', name: 'Malte', flag: '🇲🇹', dial: '+356' },
    { code: 'CY', name: 'Chypre', flag: '🇨🇾', dial: '+357' },
    // ... ajoute les autres pays européens si besoin
  ];

const CountrySelector: React.FC<{ onSelect: (country: any) => void, selected: any }> = ({ onSelect, selected }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center gap-2 bg-gray-200 rounded-full h-12 px-3"
        onClick={() => setOpen(true)}
        type="button"
      >
        <span className="text">{selected.flag}</span>
        <span className="ml-auto">▼</span>
      </button>
      {open && (
        <CountryModal
          countries={countries}
          onClose={() => setOpen(false)}
          onSelect={(country) => {
            onSelect(country);
            setOpen(false);
          }}
          selected={selected}
        />
      )}
    </>
  );
};

export default CountrySelector; 