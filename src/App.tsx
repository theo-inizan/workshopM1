import React from 'react';
// import { Music, Guitar, Zap } from 'lucide-react';

function App() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8 overflow-hidden">
      {/* Status Bar Simulation */}
      <div className="w-full max-w-sm mb-8">
        <div className="flex justify-between items-center text-black font-medium text-sm">
          {/* <span>9:41</span> */}
          <div className="flex items-center space-x-1">

          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-sm space-y-6">
        {/* Hero Banner */}

      <div className="relative rounded-3xl p-8 overflow-hidden" style={{background: 'radial-gradient(circle, #F7C443, #F5315F)'}}>
          {/* Main Text - Top Left */}
          <div className="relative z-10 text-left justify-between mb-5">
            <h1 className="text-white text-3xl font-bold leading-tight transform scale-90">
              L'abonnement
            </h1>
            <h2 className="text-3xl font-bold leading-tight transform scale-90">
              <span className="text-black">malin</span><span className="text-white">, c'est ici</span>
            </h2>
          </div>

          {/* Icon - home */}
          <div className="relative z-10 flex justify-center">
            <img 
              src="/icon_accueil2.png" 
              alt="Accueil" 
              className="h-40 w- object-contain"
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Login Button */}
          <button className="w-full py-3 bg-gray-200 text-gray-600 rounded-2xl font-medium text-lg hover:bg-gray-300 transition-colors duration-200">
            Se connecter
          </button>

          {/* Sign Up Button */}
          <button className="w-full py-3 bg-black text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-colors duration-200">
            Crée un compte
          </button>
        </div>

        {/* Logo */}
        <div className="text-center pt-8">
          <img 
            src="/logo_black.png" 
            alt="Spliiit" 
            className="mx-auto h-14 transform -rotate-2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;