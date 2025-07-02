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

const PhoneNumberPage: React.FC = () => {
  const [country, setCountry] = useState(defaultCountry);
  const [phone, setPhone] = useState('');

  const valid = isValidPhone(phone);

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
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
      <div className="flex flex-col items-center mt-8">
        <img src={logo} alt="Logo Spliüit" className="w-48 h-20 mb-8 object-contain filter invert" />
      </div>
      {/* Formulaire */}
      <div className="bg-white rounded-t-3xl p-6 shadow-lg flex flex-col gap-4">
        <h2 className="text-xl font-bold">Renseigner votre numéro de téléphone</h2>
        <div className="flex items-center gap-2">
          <CountrySelector selected={country} onSelect={setCountry} />
          <input
            type="text"
            placeholder={country.dial}
            className="flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none text-lg"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <span className="text-gray-400 text-sm">J'ai changer de numéro de téléphone</span>
        <div className="flex items-center my-2">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400 text-sm">ou continuer avec</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="flex gap-2 justify-center">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><img src={google} alt="Google" className="w-3 h-3" /> Google</button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><img src={facebook} alt="Facebook" className="w-3 h-3" /> Facebook</button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><span></span> Apple</button>
        </div>
        <a href="#" className="text-center text-gray-500 underline text-sm">Inscription par e-mail</a>
        <button
          className={`w-full rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 mt-2 transition-colors ${valid ? 'bg-pink-500 text-white cursor-pointer' : 'bg-gray-400 text-white cursor-not-allowed'}`}
          disabled={!valid}
        >
          Continuer <span>→</span>
        </button>
        <div className="text-center text-gray-500 text-sm mt-2">Vous avez un compte ? <a href="#" className="text-pink-500 font-bold">Connexion</a></div>
      </div>
    </div>
  );
};

export default PhoneNumberPage; 