// src/components/cultivation/StepTwoPlantSelection.jsx

import React, { useState } from 'react';
import PlantSelectionCard from './SeleccionCultivo';
import FilterButton from './FiltroCategoria';
import { Link } from 'react-router-dom';

// Datos estáticos de ejemplo para el prototipo
const ALL_PLANTS = [
    { id: 'tomato', emoji: '🍅', name: 'Tomate Cherry', category: 'Frutas' },
    { id: 'lettuce', emoji: '🥬', name: 'Lechuga Romana', category: 'Hortalizas' },
    { id: 'basil', emoji: '🌿', name: 'Albahaca', category: 'Hierbas Aromáticas' },
    { id: 'mint', emoji: '🌱', name: 'Menta', category: 'Hierbas Aromáticas' },
    { id: 'strawberry', emoji: '🍓', name: 'Fresas', category: 'Frutas' },
    { id: 'pepper', emoji: '🫑', name: 'Pimientos', category: 'Hortalizas' },
];

/**
 * Formulario para el Paso 2: Selección de Cultivos.
 * @param {function} onNext - Callback para avanzar al siguiente paso.
 * @param {function} onBack - Callback para cancelar el proceso.
 */
function StepTwoPlantSelection({ onNext, onBack }) {
  // Estado para manejar qué plantas están seleccionadas
  const [selectedPlants, setSelectedPlants] = useState(['lettuce', 'strawberry']); // Ejemplos seleccionados inicialmente
  
  // Función de manejo de selección: añade o quita una planta del array
  const handleSelectPlant = (plantId) => {
    setSelectedPlants(prevSelected => {
      if (prevSelected.includes(plantId)) {
        return prevSelected.filter(id => id !== plantId); // Deseleccionar
      } else {
        return [...prevSelected, plantId]; // Seleccionar
      }
    });
  };

  return (
    <div className="flex flex-col gap-8">
      
      {/* Descripción */}
      <div className="flex flex-col gap-3">
        <p className="text-4xl font-black tracking-tighter">Selecciona tus Cultivos</p>
        <p className="text-base font-normal text-gray-600 dark:text-gray-300">
          Elige una o más plantas para tu nuevo espacio de cultivo. Puedes buscarlas por nombre o filtrarlas por categoría.
        </p>
      </div>

      {/* Búsqueda y Filtros */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Barra de Búsqueda */}
        <div className="flex-1">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="flex items-center justify-center pl-4 rounded-l-lg bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-600 border-r-0">
                <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary border-gray-300 dark:border-gray-600 bg-card-light dark:bg-card-dark h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-base font-normal" 
                placeholder="Buscar por nombre de cultivo" 
              />
            </div>
          </label>
        </div>
        
        {/* Filtros de Categoría */}
        <div className="flex gap-2 overflow-x-auto pb-2">
            {/* Aquí irían los <FilterButton> usando un array de categorías. Por ahora, solo convertimos el HTML: */}
            <div className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-primary/20 dark:bg-primary/30 px-4"><p className="text-primary font-medium">Todos</p></div>
            <div className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700"><p className="text-sm font-medium">Hortalizas</p></div>
            <div className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700"><p className="text-sm font-medium">Hierbas Aromáticas</p></div>
            <div className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-card-light dark:bg-card-dark px-4 hover:bg-gray-200 dark:hover:bg-gray-700"><p className="text-sm font-medium">Frutas</p></div>
        </div>
      </div>
      
      {/* Cuadrícula de Selección de Plantas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ALL_PLANTS.map(plant => (
            <PlantSelectionCard
                key={plant.id}
                emoji={plant.emoji}
                name={plant.name}
                isSelected={selectedPlants.includes(plant.id)}
                onSelect={() => handleSelectPlant(plant.id)}
            />
        ))}
      </div>

      {/* Botones de Navegación del Flujo */}
      <div className="flex justify-between items-center mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        <Link 
            to= "/cultivos"
            className="px-6 py-2 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
            // Por ahora, solo ponemos una alerta
            onClick={() => alert("Cancelado")} 
        >
            Cancelar
        </Link>
        <div className="flex gap-4">
          <button 
            className="px-6 py-3 rounded-lg text-sm font-bold text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            onClick={onBack}
          >
            Atrás
          </button>
          <button 
            className="px-6 py-3 rounded-lg text-sm font-bold text-white bg-primary hover:bg-secondary-green"
            onClick={onNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepTwoPlantSelection;