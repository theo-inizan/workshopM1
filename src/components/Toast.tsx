import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  app?: string;
  time?: string;
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  app = 'MESSAGES', 
  time = 'now', 
  duration = 4000, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    setTimeout(() => setIsVisible(true), 100);

    // Auto-fermeture après la durée spécifiée
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 1000); // Attendre la fin de l'animation de sortie
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-12 left-4 right-4 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-4'
      }`}
      style={{
        opacity: isVisible ? 1 : 0
      }}
    >
      <div 
        className="backdrop-blur-lg rounded-2xl shadow-2xl p-4 border border-gray-200 border-opacity-30"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)' // Opacité uniquement sur le background
        }}
      >
        {/* Header avec app et time */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">

            <span className="text-gray-600 font-medium text-sm tracking-wide">{app}</span>
          </div>
          <span className="text-gray-500 text-sm">{time}</span>
        </div>
        
        {/* Message principal */}
        <div className="text-gray-900 font-normal text-base leading-relaxed">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Toast;
