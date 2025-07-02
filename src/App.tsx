import React from 'react';
import { Music, Guitar, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      {/* Status Bar Simulation */}
      <div className="w-full max-w-sm mb-8">
        <div className="flex justify-between items-center text-black font-medium text-sm">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-6 h-3 bg-black rounded-sm relative">
              <div className="absolute right-0 top-0 w-1 h-1 bg-gray-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-sm space-y-6">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-br from-pink-500 via-pink-400 to-orange-400 rounded-3xl p-8 text-center overflow-hidden">
          {/* Floating Musical Notes */}
          <div className="absolute top-4 left-6 text-green-300 animate-bounce">
            <Music size={24} />
          </div>
          <div className="absolute top-8 right-8 text-purple-300 animate-pulse">
            <Music size={20} />
          </div>
          <div className="absolute bottom-12 left-4 text-green-400 animate-bounce delay-300">
            <Music size={18} />
          </div>
          <div className="absolute bottom-16 right-6 text-purple-200 animate-pulse delay-500">
            <Music size={22} />
          </div>
          
          {/* Lightning bolts for energy */}
          <div className="absolute top-12 right-4 text-yellow-300 animate-pulse">
            <Zap size={16} />
          </div>
          <div className="absolute bottom-8 left-8 text-yellow-200 animate-bounce delay-700">
            <Zap size={14} />
          </div>

          {/* Main Text */}
          <div className="relative z-10 mb-8">
            <h1 className="text-white text-2xl font-light leading-tight mb-2">
              L'abonnement
            </h1>
            <h2 className="text-black text-2xl font-bold leading-tight">
              malin, c'est ici
            </h2>
          </div>

          {/* Character/Mascot Area */}
          <div className="relative z-10 flex justify-center items-center">
            <div className="relative">
              {/* Main character representation */}
              <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                  {/* Simple character face */}
                  <div className="relative">
                    <div className="w-2 h-2 bg-black rounded-full absolute -top-2 -left-1"></div>
                    <div className="w-2 h-2 bg-black rounded-full absolute -top-2 right-1"></div>
                    <div className="w-3 h-1 bg-black rounded-full absolute top-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Guitar */}
              <div className="absolute -bottom-2 -right-2 transform rotate-12">
                <Guitar size={32} className="text-amber-800" />
              </div>
              
              {/* Hair/spikes */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-2 h-4 bg-gray-300 rounded-t-full transform -rotate-12"></div>
                  <div className="w-2 h-5 bg-gray-300 rounded-t-full"></div>
                  <div className="w-2 h-4 bg-gray-300 rounded-t-full transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Login Button */}
          <button className="w-full py-4 bg-gray-200 text-gray-600 rounded-2xl font-medium text-lg hover:bg-gray-300 transition-colors duration-200">
            Se connecter
          </button>

          {/* Sign Up Button */}
          <button className="w-full py-4 bg-black text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-colors duration-200">
            Crée un compte
          </button>
        </div>

        {/* Logo */}
        <div className="text-center pt-8">
          <h3 className="text-black text-4xl font-bold italic transform -rotate-2" style={{ fontFamily: 'cursive' }}>
            Spliiît
          </h3>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="mt-12">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}

export default App;