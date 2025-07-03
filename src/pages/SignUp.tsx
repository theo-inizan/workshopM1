import React, { useState } from 'react';
import background from '../assets/background.png';
import ProgressBar from '../components/ProgressBar';
import Logo from '../components/Logo';
import PhoneInputForm from '../components/PhoneInputForm';

const defaultCountry = { code: 'FR', name: 'France', flag: '🇫🇷', dial: '+33' };

function isValidPhone(phone: string) {
  // Valide si 9 à 15 chiffres, sans espaces
  return /^\d{9,15}$/.test(phone.replace(/\s/g, ''));
}

// Composant PhoneInputForm

const SignupPage: React.FC = () => {
  const [country, setCountry] = useState(defaultCountry);
  const [phone, setPhone] = useState('');
  const valid = isValidPhone(phone);

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="p-4">
        <ProgressBar step={1} total={3} onBack={() => {/* action retour */}} />
      </div>
      <Logo />
      
      <div className="bg-white items-center justify-center rounded-t-3xl p-6 shadow-lg flex flex-col md:gap-6">
        <PhoneInputForm country={country} setCountry={setCountry} phone={phone} setPhone={setPhone} valid={valid} />
      </div>
    </div>
  );
};

export default SignupPage; 