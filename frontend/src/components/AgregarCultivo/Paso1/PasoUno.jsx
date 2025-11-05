
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Formulario para el Paso 1: Definición de información básica.
 * @param {function} onNext - Callback para avanzar al siguiente paso.
 * @param {function} onCancel - Callback para cancelar el flujo.
 * 
 * Todo esta estatico al no estar totalmente conectado todo
 */
function PasoUno({ onNext, onCancel }) {
  
  
  return (
    <div className="flex flex-col gap-6">
      
      {/* Input de Nombre del Cultivo */}
      <label className="flex flex-col min-w-40 flex-1">
        <p className="text-[#333333] dark:text-gray-200 text-base font-medium leading-normal pb-2">
          Nombre del Cultivo
        </p>
        <input 
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 border border-[#E0E0E0] dark:border-gray-600 bg-white dark:bg-background-dark h-14 placeholder:text-[#757575] p-[15px] text-base font-normal leading-normal" 
          placeholder="Ej: Tomates Cherry" 
          // Aqui se usa el value={name} y onChange={handleChange}
        />
      </label>
      
      {/* Selector de Ubicación */}
      <div className="flex flex-col gap-3">
        <p className="text-[#333333] dark:text-gray-200 text-base font-normal leading-normal">
          ¿Dónde crecerá tu cultivo?
        </p>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Botón Interior (Seleccionado) */}
          <button className="flex items-center justify-center gap-3 p-6 rounded-lg border-2 border-primary bg-primary/20 text-gray-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary">
            <span className="material-symbols-outlined">home</span>
            <span>Interior</span>
          </button>
          
          {/* Botón Exterior (No Seleccionado) */}
          <button className="flex items-center justify-center gap-3 p-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-800 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary">
            <span className="material-symbols-outlined">yard</span>
            <span>Exterior</span>
          </button>
        </div>
      </div>
      
      {/* Botones de Navegación */}
      <div className="flex justify-end items-center gap-4 pt-4">
        <Link 
          to="/cultivos"
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-sm font-bold leading-normal tracking-[0.015em] bg-transparent text-[#757575] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => alert("Cancelado")}
        >
          Cancelar
        </Link>
        <button 
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary"
          onClick={onNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default PasoUno;