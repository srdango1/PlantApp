// src/components/cultivation/PlantSelectionCard.jsx

import React from 'react';

/**
 * Tarjeta individual para seleccionar un cultivo en el paso 2.
 * @param {object} props - Propiedades del cultivo.
 * @param {string} props.emoji - Emoji o icono del cultivo (ej: "🍅").
 * @param {string} props.name - Nombre del cultivo (ej: "Tomate Cherry").
 * @param {boolean} props.isSelected - Indica si la tarjeta está seleccionada.
 * @param {function} props.onSelect - Función a llamar cuando se hace clic.
 */


function PlantSelectionCard({ emoji, name, isSelected, onSelect }) {
  
  // Clases dinámicas basadas en el estado de selección
  const baseClasses = "group relative cursor-pointer rounded-xl transition-all duration-300 bg-card-light dark:bg-card-dark shadow-md hover:shadow-xl flex flex-col items-center p-4";
  const selectedClasses = isSelected 
    ? "border-2 border-primary shadow-xl ring-2 ring-primary/50" 
    : "border-2 border-transparent hover:border-primary";
  
  return (
    <div className={`${baseClasses} ${selectedClasses}`} onClick={onSelect}>
      
      {/* Círculo de Checkbox / Indicador */}
      <div className={`absolute top-3 right-3 z-10 size-6 rounded-full border-2 flex items-center justify-center`}>
        {isSelected ? (
          // Estado Seleccionado
          <span className="material-symbols-outlined text-white text-base bg-primary border-primary">check</span>
        ) : (
          // Estado No Seleccionado
          <span className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-500 group-hover:border-primary"></span>
        )}
      </div>
      
      {/* Emoji/Icono */}
      <div className="w-36 h-36 flex items-center justify-center">
        <span className="text-8xl">{emoji}</span>
      </div>
      
      {/* Nombre */}
      <div className="text-center">
        <h3 className="font-bold">{name}</h3>
      </div>
    </div>
  );
}

export default PlantSelectionCard;