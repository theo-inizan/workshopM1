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

const InfoPerso: React.FC = () => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [pseudo, setPseudo] = useState('');

  const isFormComplete = prenom.trim() !== '' && nom.trim() !== '' && pseudo.trim() !== '';

  return (
    <div
      className="h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Barre de progression */}
      <div className="p-4">
        <button className="text-2xl">←</button>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-4">
          <div className="h-2 bg-pink-400 rounded-full" style={{ width: '30%' }}></div>
        </div>
        <div className="text-right text-xs mt-1 text-gray-700">1/3</div>
      </div>
      {/* Logo */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={logo} alt="Logo Spliüit" className="w-48 h-20 object-contain filter invert" />
      </div>
      {/* Formulaire */}
      <div className="bg-white rounded-t-3xl p-6 shadow-lg flex flex-col h-[60%]">
        <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
          <h2 className="text-xl font-bold">Comment vous appelez-vous ?</h2>
          
          {/* Champs de saisie */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="w-full p-3 bg-gray-100 border-2 border-transparent rounded-3xl text-lg focus:border-black focus:outline-none focus:bg-white"
            />
            
            <input
              type="text"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full p-3 bg-gray-100 border-2 border-transparent rounded-3xl text-lg focus:border-black focus:outline-none focus:bg-white"
            />
            
            <input
              type="text"
              placeholder="Pseudo"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              className="w-full p-3 bg-gray-100 border-2 border-transparent rounded-3xl text-lg focus:border-black focus:outline-none focus:bg-white"
            />
          </div>

          {/* Encart informatif */}
          <div className="bg-blue-50 p-4 rounded-2xl text-center">
            <p className="text-blue-800 text-sm mb-2">
              Vous avez la possibilité de choisir un pseudonyme afin que votre prénom ne soit pas visible des autres utilisateurs
            </p>
          </div>
            <p className="text-gray-600 text-xs text-center">
              En m'inscrivant j'accepte les <span className="underline">CGU</span>
            </p>
        </div>
        
        <div className="pt-4">
          <button
            className={`w-full rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 transition-colors ${isFormComplete ? 'bg-black text-white cursor-pointer' : 'bg-gray-400 text-white cursor-not-allowed'}`}
            disabled={!isFormComplete}
          >
            S'inscrire <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoPerso; 