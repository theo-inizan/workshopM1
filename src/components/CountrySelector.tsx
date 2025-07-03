import React, { useState } from 'react';
import CountryModal from '../components/CountryModal';
import fr from '../assets/pays_euro/fr.png';
import de from '../assets/pays_euro/de.png';
import it from '../assets/pays_euro/it.png';
import es from '../assets/pays_euro/es.png';
import pt from '../assets/pays_euro/pt.png';
import be from '../assets/pays_euro/be.png';
import nl from '../assets/pays_euro/nl.png';
import lu from '../assets/pays_euro/lu.png';
import at from '../assets/pays_euro/at.png';
import ie from '../assets/pays_euro/ie.png';
import dk from '../assets/pays_euro/dk.png';
import fi from '../assets/pays_euro/fi.png';
import gr from '../assets/pays_euro/gr.png';
import sk from '../assets/pays_euro/sk.png';
import hr from '../assets/pays_euro/hr.png';
import si from '../assets/pays_euro/si.png';
import ee from '../assets/pays_euro/ee.png';
import lv from '../assets/pays_euro/lv.png';
import lt from '../assets/pays_euro/lt.png';
import mt from '../assets/pays_euro/mt.png';
import cy from '../assets/pays_euro/cy.png';

const countries = [
    { code: 'FR', name: 'France', flag: fr, dial: '+33' },
    { code: 'DE', name: 'Allemagne', flag: de, dial: '+49' },
    { code: 'IT', name: 'Italie', flag: it, dial: '+39' },
    { code: 'ES', name: 'Espagne', flag: es, dial: '+34' },
    { code: 'PT', name: 'Portugal', flag: pt, dial: '+351' },
    { code: 'BE', name: 'Belgique', flag: be, dial: '+32' },
    { code: 'NL', name: 'Pays-Bas', flag: nl, dial: '+31' },
    { code: 'LU', name: 'Luxembourg', flag: lu, dial: '+352' },
    { code: 'AT', name: 'Autriche', flag: at, dial: '+43' },
    { code: 'IE', name: 'Irlande', flag: ie, dial: '+353' },
    { code: 'DK', name: 'Danemark', flag: dk, dial: '+45' },
    { code: 'FI', name: 'Finlande', flag: fi, dial: '+358' },
    { code: 'GR', name: 'Grèce', flag: gr, dial: '+30' },
    { code: 'SK', name: 'Slovaquie', flag: sk, dial: '+421' },
    { code: 'HR', name: 'Croatie', flag: hr, dial: '+385' },
    { code: 'SI', name: 'Slovénie', flag: si, dial: '+386' },
    { code: 'EE', name: 'Estonie', flag: ee, dial: '+372' },
    { code: 'LV', name: 'Lettonie', flag: lv, dial: '+371' },
    { code: 'LT', name: 'Lituanie', flag: lt, dial: '+370' },
    { code: 'MT', name: 'Malte', flag: mt, dial: '+356' },
    { code: 'CY', name: 'Chypre', flag: cy, dial: '+357' },
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
        <img src={selected.flag} alt={selected.name} className="w-6 h-6 rounded-full object-cover" />
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