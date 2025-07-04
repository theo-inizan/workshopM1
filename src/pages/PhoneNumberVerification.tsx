import React, { useState } from 'react';
import background from '../assets/background.png';
import ProgressBar from '../components/ProgressBar';
import logo from '../assets/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const defaultCountry = { code: 'FR', name: 'France', flag: '🇫', dial: '+33' };

function isValidPhone(phone: string) {
  // Valide si 9 à 15 chiffres, sans espaces
  return /^\d{9,15}$/.test(phone.replace(/\s/g, ''));
}

const PhoneNumberVerification: React.FC = () => {
  const [country, setCountry] = useState(defaultCountry);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isShaking, setIsShaking] = useState(false);
  const [isInputShaking, setIsInputShaking] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const phoneNumber = location.state?.phoneNumber || '06 07 08 09 10';
  const expectedCode = location.state?.verificationCode || '123456';

  const isCodeComplete = code.every(digit => digit !== '' && /^\d$/.test(digit));
  const enteredCode = code.join('');
  const isCodeCorrect = enteredCode === expectedCode;

  const handleContinueClick = () => {
    if (isCodeComplete && !isCodeCorrect) {
      // Déclencher l'animation de vibration sur le bouton ET les inputs
      setIsShaking(true);
      setIsInputShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        setIsInputShaking(false);
      }, 500);
    }
  };

  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
      <div
        className="h-screen flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
      <div className="p-4">
       <ProgressBar step={2} total={3} onBack={() => navigate('/signup')} />
      </div>
      {/* Logo */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img src={logo} alt="Logo Spliüit" className="w-48 h-20 object-contain filter invert" />
      </div>
      {/* Formulaire */}
      <div className="bg-white rounded-t-3xl p-6 shadow-lg flex flex-col justify-between h-[60%]">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Vérification numéro</h2>
          <span className="text-gray-400 text-sm">
            Saissisez le code a 6 chiffres envoyés au
            <br />
            <span className="font-bold text-blue-600">{phoneNumber}</span>
          </span>

          {/* bulles */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={code[index]}
                className={`w-12 h-12 border-2 rounded-full text-center text-xl font-bold focus:border-pink-500 focus:outline-none ${
                  isCodeComplete && !isCodeCorrect 
                    ? 'border-red-500' 
                    : 'border-gray-300'
                }`}
                style={{
                  animation: isInputShaking ? 'shake 0.5s ease-in-out' : 'none'
                }}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value && /^\d$/.test(value)) {
                    const newCode = [...code];
                    newCode[index] = value;
                    setCode(newCode);
                    // Si un chiffre est saisi, passer au champ suivant
                    const nextInput = (e.target as HTMLInputElement).parentElement?.children[index + 1] as HTMLInputElement;
                    if (nextInput) nextInput.focus();
                  } else if (value === '') {
                    const newCode = [...code];
                    newCode[index] = '';
                    setCode(newCode);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !(e.currentTarget as HTMLInputElement).value) {
                    // Si backspace et champ vide, revenir au champ précédent
                    const prevInput = (e.target as HTMLInputElement).parentElement?.children[index - 1] as HTMLInputElement;
                    if (prevInput) prevInput.focus();
                  }
                }}
              />
            ))}
          </div>

          <span className="text-gray-400 text-sm text-center">Le code est valable 5 min, limité a 3 essais  <br /> maximums</span>

          <a href="#" className="text-center py-3 text-gray-500 underline text-sm">Recevoir un nouveau code</a>
        </div>
        
        {isCodeCorrect ? (
          <Link to={from === 'signin' ? '/spliiit' : '/info'}>
            <button
              className="w-full rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 transition-colors bg-black text-white cursor-pointer"
            >
              Continuer <span>→</span>
            </button>
          </Link>
        ) : (
          <button
            onClick={handleContinueClick}
            className={`w-full rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              isCodeComplete 
                ? 'bg-red-500 text-white cursor-pointer' 
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={!isCodeComplete}
            style={{
              animation: isShaking ? 'shake 0.5s ease-in-out' : 'none'
            }}
          >
            Continuer <span>→</span>
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default PhoneNumberVerification; 