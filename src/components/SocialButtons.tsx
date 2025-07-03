import google from '../assets/google.webp';
import facebook from '../assets/facebook.png';
import apple from '../assets/apple.svg';

// Composant SocialButtons
const SocialButtons = () => (
    <div className="flex gap-2 justify-center">
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><img src={google} alt="Google" className="w-3 h-3" /> Google</button>
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full"><img src={facebook} alt="Facebook" className="w-3 h-3" /> Facebook</button>
      <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full "><img src={apple} alt="Apple" className="w-3 h-3 invert " /> Apple</button>
    </div>
  );

export default SocialButtons;