
// 1. Importaciones de React 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. Importaciones de tus componentes de Página
import MisCultivosPage from './pages/MisCultivosPage'; // La nueva vista detallada
import Inicio from './pages/Inicio';

function App() {
  return (
    // 3. Contenedor Raíz con Clases Globales
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark relative flex min-h-screen w-full flex-col">
      
      {/* 4. El Router envuelve todo el contenido navegable */}
      <Router>
        {/* 5. Definición de Rutas */}
        <Routes>
  
          {/* RUTA DE INICIO (Puede ser tu vista de Dashboard/Estadísticas) */}
          <Route path="/inicio" element={<Inicio />} /> 
          
          {/* RUTA DEL FLUJO PRINCIPAL: Mis Cultivos */}
          <Route path="/cultivos" element={<MisCultivosPage />} />
          
        </Routes>
      </Router>
      
      {/* 6. Elemento Fijo (Botón de Soporte) */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg hover:bg-accent/90 transition-colors">
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>support_agent</span>
      </button>
      
    </div>
  );
}

export default App;