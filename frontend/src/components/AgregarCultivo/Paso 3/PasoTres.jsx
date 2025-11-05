// src/components/cultivation/StepThreeDeviceConnect.jsx

import React, { useState, useEffect } from 'react';
import SensorStatusItem from './SensorStatus';
import { Link } from 'react-router-dom';

// Datos de ejemplo para el prototipo (simulando estado real)
const INITIAL_SENSORS = [
    { id: 'humedad', name: 'Sensor de Humedad del Suelo', status: 'Conectado', detail: '' },
    { id: 'temp', name: 'Sensor de Temperatura/Humedad', status: 'Conectado', detail: '' },
    { id: 'luz', name: 'Sensor de Luz', status: 'Conectado', detail: '' },
];

/**
 * Formulario para el Paso 3: Conexión de Dispositivos.
 * @param {function} onNext - Callback para avanzar al siguiente paso.
 * @param {function} onBack - Callback para retroceder al paso anterior.
 * @param {function} onCancel - Callback para cancelar el flujo.
 */
function StepThreeDeviceConnect({ onNext, onBack, onCancel }) {
  const [sensors, setSensors] = useState(INITIAL_SENSORS);
  
  // Lógica para determinar si se puede avanzar (todos deben estar 'Conectado')
  const canProceed = sensors.every(s => s.status === 'Conectado');
  
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8">
      
      {/* Encabezado del Paso (El título y la descripción deben estar en el componente padre AddCultivationPage) */}
      
      {/* Contenido principal en cuadrícula (Instrucciones y Estado) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Lado Izquierdo: Instrucciones */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-4">Conectando tu Arduino</h2>
          <div className="space-y-4">
            
            {/* Paso 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">1</div>
              <p>Conecta el Arduino a tu computadora mediante USB.</p>
            </div>
            
            {/* Paso 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">2</div>
              <p>Coloca los sensores en la tierra y conéctalos a los pines designados en la placa Arduino.</p>
            </div>
            
            {/* Paso 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</div>
              <p>La aplicación ahora intentará detectar tus sensores automáticamente.</p>
            </div>
          </div>
          
          {/* Imagen de Arduino */}
          <div className="mt-6 aspect-w-4 aspect-h-3 w-full rounded-lg overflow-hidden">
            <img alt="Dispositivo Arduino" className="w-full h-full object-contain bg-gray-200 dark:bg-gray-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpXnuIMqUjC5V_UwbqrOuA7a8ZUNfF6B3AXhYm6yGUUZ0BetRjn3ZQKM_alGAuWAwVr1t9t5gAvLroN4ymzPTL5Tb4M_EEqfwQBNoCfg1tairviRe07nc1S7yer5R_9DWy4aW4FdxA8wnIy-M_VdMR9jvQF65uuyZuHVn8_hChyDkCsgiDMx2iKdhgIX80QySg7xLw80GW7eGtEthVV3QCOSPKsRZAmw-2qzGspXqYXYSxYZ_0IPTnp4nF0zHSUfhOw1r6amJPXn9j"/>
          </div>
        </div>
        
        {/* Lado Derecho: Estado de Conexión */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex flex-col">
          <h2 className="text-xl font-bold mb-4">Estado de Conexión del Sensor</h2>
          <div className="space-y-4 flex-1">
            {/* Mapeo del Estado de los Sensores */}
            {sensors.map(sensor => (
              <SensorStatusItem 
                key={sensor.id}
                name={sensor.name}
                status={sensor.status}
                detail={sensor.detail}
              />
            ))}
          </div>
          
          {/* Botones de Navegación del Flujo */}
          <div className="mt-8 flex justify-between items-center">
            <Link 
              to ="/cultivos"
              className="text-sm font-medium text-gray-600 dark:text-gray-400"
              onClick={() => alert("Cancelado")}
            >
              Cancelar
            </Link>
            <div className="flex gap-4">
              <button 
                className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold"
                onClick={onBack}
              >
                Atrás
              </button>
              {/* El botón Siguiente está deshabilitado si no puede proceder */}
              <button 
                className="px-6 py-2 rounded-lg bg-primary text-white font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed" 
                disabled={!canProceed}
                onClick={onNext}
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThreeDeviceConnect;