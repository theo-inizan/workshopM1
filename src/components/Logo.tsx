import logo from '../assets/logo.png';

const Logo = () => (
    <div className="flex flex-col items-center mt-8">
      <img src={logo} alt="Logo Spliiit" className="w-48 h-20 mb-8 object-contain filter invert" />
    </div>
  );

export default Logo;