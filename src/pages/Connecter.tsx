import React, { useState } from 'react';
import CountrySelector from '../components/CountrySelector';
import logo from '../assets/logo.png';
import google from '../assets/google.webp';
import facebook from '../assets/facebook.png';
import background from '../assets/background.png';

const defaultCountry = { code: 'FR', name: 'France', flag: '🇫��', dial: '+33' };

function isValidPhone(phone: string) {
  // Valide si 9 à 15 chiffres, sans espaces
  return /^\d{9,15}$/.test(phone.replace(/\s/g, ''));
}

const AccueilConnecter: React.FC = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');

  const isFormComplete = prenom.trim() !== '' && nom.trim() !== '' && pseudo.trim() !== '';

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >

      {/* Logo */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={logo} alt="Logo Spliüit" className="w-48 h-20 object-contain filter invert" />
      </div>
      {/* Formulaire */}
      
    </div>
  );
};

export default AccueilConnecter; 