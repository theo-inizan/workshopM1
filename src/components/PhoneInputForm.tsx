import CountrySelector from './CountrySelector';
import SocialButtons from './SocialButtons';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext';

const PhoneInputForm = ({ country, setCountry, phone, setPhone, valid, isSignIn }: any) => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleContinue = () => {
    if (valid) {
      // Générer un code aléatoire à 6 chiffres
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Formater le numéro complet avec l'indicatif pays
      const fullPhoneNumber = `${country.dial} ${phone}`;
      
      navigate('/verification', { 
        state: { 
          phoneNumber: fullPhoneNumber,
          verificationCode: verificationCode
        } 
      });
      // Afficher la notification après la navigation
      setTimeout(() => {
        showToast(
          `Spliiit : ${verificationCode} est votre code de vérification. Ne le partagez pas !`,
          '38002',
          'maintenant',
          6000  // 6 secondes au lieu de 4 par défaut
        );
      }, 100);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-bold">Renseigner votre numéro de téléphone</h2>
      <div className="flex items-center gap-3">
        <CountrySelector selected={country} onSelect={setCountry} />
        <input
          type="tel"
          placeholder={country.dial}
          className="flex-1 bg-gray-100 rounded-full px-4 py-3 outline-none text-lg"
          value={phone}
          onChange={e => {
            // Ne garder que les chiffres et les espaces
            const value = e.target.value.replace(/[^0-9\s]/g, '');
            setPhone(value);
          }}
          onKeyPress={e => {
            // Empêcher la saisie de caractères non numériques (sauf espace)
            if (!/[0-9\s]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
              e.preventDefault();
            }
          }}
        />
      </div>
      {isSignIn && (
        <span className="text-gray-500 underline text-sm">J'ai changé de numéro de téléphone</span>
      )}
      <div className="flex items-center my-2">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="mx-2 text-gray-400 text-sm">ou continuer avec</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <SocialButtons />
      <a href="#" className="text-center text-gray-500 underline text-sm">Inscription par e-mail</a>
      <button
        onClick={handleContinue}
        className={`w-full max-w-sm rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 mt-2 transition-colors ${valid ? 'bg-black text-white cursor-pointer' : 'bg-gray-400 text-white cursor-not-allowed'}`}
        disabled={!valid}
      >
        Continuer <span>→</span>
      </button>
      <div className="text-center text-gray-500 text-sm mt-2">Vous avez un compte ? <a href="#" className="text-pink-500 font-bold">Connexion</a></div>
    </div>
  );
};

export default PhoneInputForm;