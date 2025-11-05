

import React, { useState } from 'react';
import Header from '../components/Header'; 
import ProgressStepper from '../components/AgregarCultivo/ProgressBar';
import StepOneBasicInfo from '../components/AgregarCultivo/Paso1/PasoUno';
import StepTwoPlantSelection from '../components/AgregarCultivo/Paso2/PasoDos';
import StepThreeDeviceConnect from '../components/AgregarCultivo/Paso 3/PasoTres';
import StepFourSummary from '../components/AgregarCultivo/Paso 4/PasoCuatro';


const TOTAL_STEPS = 4; // Cambia esto si el número total de pasos es diferente

function AgregarCultivo() {
  // Estado para controlar qué paso mostrar
  const [currentStep, setCurrentStep] = useState(1);
  
  // Función para avanzar
  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  // Función para retroceder (puedes usarla en los siguientes pasos)
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Función para cancelar (navegar a otra ruta)
  const handleCancel = () => {
    // Ejemplo: Navegar de vuelta a Mis Cultivos (requiere useHistory o useNavigate de react-router-dom)
    // navigate('/cultivos'); 
    alert("Operación Cancelada");
  };

  // Función para determinar qué componente mostrar
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOneBasicInfo onNext={handleNext} onCancel={handleCancel} />;
      case 2:
        return <StepTwoPlantSelection onNext={handleNext} onBack={handleBack} />
      case 3:
        return <StepThreeDeviceConnect onNext={handleNext} onBack={handleBack} /> 
      case 4:
        return <StepFourSummary onFinish={handleFinish} onBack={handleBack} /> 
      default:
        return <p>Error: Paso no encontrado.</p>;
    }
  };
  // Define la función de finalización que manejará el envío final de datos
  const handleFinish = () => {
    // Aquí iría la lógica para enviar el objeto de estado (formData) a tu API
    alert("¡Cultivo Guardado y Finalizado!");
    // Aquí podrías usar useNavigate() para ir a la página de Mis Cultivos.
  };
  return (
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      
      <main className="flex-1 px-10 py-8">
        <div className="flex flex-col max-w-[480px] mx-auto gap-8">
          
          {/* Título y Subtítulo */}
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-[#333333] dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em]">
                Agregar Nuevo Cultivo
              </p>
              <p className="text-[#757575] dark:text-gray-400 text-base font-normal leading-normal">
                Paso {currentStep} de {TOTAL_STEPS}: Define la información básica
              </p>
            </div>
          </div>
          
          {/* Barra de Progreso */}
          <ProgressStepper currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          
          {/* Renderizado del Paso Actual */}
          {renderStep()}
          
        </div>
      </main>
    </div>
  );
}

export default AgregarCultivo;