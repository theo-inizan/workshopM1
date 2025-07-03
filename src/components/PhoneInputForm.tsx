import CountrySelector from './CountrySelector';
import SocialButtons from './SocialButtons';

const PhoneInputForm = ({ country, setCountry, phone, setPhone, valid }: any) => (
    <>
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
      <SocialButtons />
      <a href="#" className="text-center text-gray-500 underline text-sm">Inscription par e-mail</a>
      <button
        className={`w-full max-w-sm rounded-full py-3 font-bold text-lg flex items-center justify-center gap-2 mt-2 transition-colors ${valid ? 'bg-black text-white cursor-pointer' : 'bg-gray-400 text-white cursor-not-allowed'}`}
        disabled={!valid}
      >
        Continuer <span>→</span>
      </button>
      <div className="text-center text-gray-500 text-sm mt-2">Vous avez un compte ? <a href="#" className="text-pink-500 font-bold">Connexion</a></div>
    </>
  );

export default PhoneInputForm;