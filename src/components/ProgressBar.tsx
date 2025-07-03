import React from "react";

interface ProgressBarProps {
  step: number;      // étape actuelle (ex: 1)
  total: number;     // nombre total d'étapes (ex: 3)
  onBack?: () => void; // fonction pour le bouton retour
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, total, onBack }) => {
  const percent = (step / total) * 100;

  return (
    <div className="flex items-center w-full px-4 pt-4">
      {/* Bouton retour rond */}
      <button
        onClick={onBack}
        className="w-8 h-8 flex items-center justify-center bg-white shadow-md rounded-full mr-4"
        aria-label="Retour"
        type="button"
      >
        <span className="text-xl">{'‹'}</span>
      </button>
      {/* Barre de progression */}
      <div className="flex-1 flex items-center relative">
        <div className="w-full h-3 bg-white rounded-full shadow-inner" />
        <div
          className="absolute left-0 top-0 h-3 bg-pink-500 rounded-full transition-all"
          style={{ width: `${percent}%`, maxWidth: "100%" }}
        />
      </div>
      {/* Étape */}
      <span className="ml-4 text-gray-700 font-medium">{step}/{total}</span>
    </div>
  );
};

export default ProgressBar;