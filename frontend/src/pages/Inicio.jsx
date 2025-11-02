//import React
import React from 'react';

//Import de componentes
import Header from '../components/Header.jsx';
import StatsCard from '../components/Inicio/StatsCard.jsx'; 
import CultivationCard from '../components/Inicio/CultivationCard.jsx'; 
import WeatherWidget from '../components/Inicio/WeatherWidget.jsx'; 
import Sidebar from '../components/Inicio/SideBar.jsx'; 

function Inicio() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <div className="flex flex-1">
        
        <main className="w-full lg:w-2/3 xl:w-3/4 p-6">
          
          {/* Seccion de Estadisticas */}
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Aquí irían los componentes <StatsCard /> hay que hacer que sean dinamicos */}
            <StatsCard title="Humedad promedio" value="65%" />
            <StatsCard title="Temperatura promedio" value="24°C" />
            <StatsCard title="Nivel de agua" value="80%" />
            <StatsCard title="Luz recibida" value="75%" />
          </div>

          {/* Tarjeta de Clima Actual en parte central */}
          <WeatherWidget />

          {/* Mis Camas de Cultivo */}
          <h3 className="text-xl font-bold mb-4">Mis Camas de Cultivo</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Aquí van los componentes <CultivationCard /> por ahora con datos fijos */}
            <CultivationCard name="Cama de Tomates" status="Saludable" statusColor="bg-primary" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCI9BGKuXk_Qy_f0mtGxRE2-nXFt3P7Tx2Ipr2xoSzMofKF_GetMIc90aRoYNAzslJb25tqn762mbpNXdc_0BUMVyjTpb5HDsA4-BPwGRUXaFTKzMbQx3sN2SaS-Qpn04_cPWYfFVH471Et9ARYTIbsFTok3Ut6SFMY6-VoF7Zg--P3Z5r6sEY6EN5kq_PWvK7tnG1XT8Ilv_ODD-qL3eknPpW-ZziJnvHETO4Ei6gRs33ehY6GGBq-HdTFTzUNQVghndQ7uNmGufN7" />
            <CultivationCard name="Cama de Lechugas" status="Normal" statusColor="bg-yellow-400" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuASTwh0cNgTSJ87XlU7_I5An2iynqis3znXZFkcSrQwaHfbiI2OZk7kJuYjCNwuo64oezSdQWNVFiH5fQGCQkYewT8FHbKmDqV3cJH5n2BtjqpfDQgavlxYmEN7Q4i5rnBUn25lzS7hCrYeZJgQJuZPaEDNqDuHU0YbnsKCgj4zzCD3DBl5bcZ_X1mhTQPAkBt1gyde4YGQ1NkzgbVLtwo02n_AOa_FBQE54LgxjwmLnPpXifbybaWD1FhTrUbRN1vNeymxdzHcSiCW" />

          </div>
        </main>
        
        {/* Barra Lateral muestra alertas y clima en chiquito*/}
      <Sidebar />
        
      </div>
      
      {/* Botón de Soporte Fijo */}
      <button className="fixed bottom-6 right-6 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg hover:bg-accent/90 transition-colors">
        <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>support_agent</span>
      </button>
      
    </div>
  );
}

export default Inicio;