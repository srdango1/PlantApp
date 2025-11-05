// src/pages/MisCultivosPage.jsx
import { Link } from 'react-router-dom';
import React from 'react';
import DetailedCultivationCard from '../components/Mis Cultivos/DetailedCultivationCard';
import Header from '../components/Header'; // Asegúrate de que la ruta sea correcta

// Datos de ejemplo para el prototipo
const CULTIVATION_DATA = [
    {
        id: 1,
        name: "Lechugas - Cama 1",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUrro4BndRZevZ6SI0fqkNRopd60Dn6wfgbc4FSaS222BH1a75sE54KZABAlJuWnH_w9WUd0spUm3ZGnBj2oFdUDU8_za2__RfeTmj8gLqI1Sg_FmbGsAHqTnbulbgcikLwxpyZtv8c_Zx1120qJhzHSK9zJcIMkUXCyGHr7a13u_BjfhyqEbeEEvB6HOBRVhQURGyTgLzUckPUQlxHKujj_l1K6KMwAubQpfGufoahxzQiYaFZ3e-cKsUIBfnwBgaCpBq9MIuk0L3",
        statusText: "Saludable",
        statusDotColor: "bg-green-500",
        statusTextColor: "text-green-500",
        temperature: "22°C",
        humidity: "65%",
        waterLevel: "80%"
    },
    {
        id: 2,
        name: "Tomates Cherry - Balcón",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC_9Hakg1INZM6BjqCTO4Z5KeV40vNA2ZY7qG0qds2AxuGTfuFeSyPiTVuoQxgBHvxGqcWYWnEp_Q7ncD_DdbKaP3-13VgIj1dl9QkeaRFpaSpf91FOl6ceLdV4DMVEt7ZtGvEsxYGVTfvHOhKHPfywpHbyxj7nJ6ZUadKrOj6CUrcNb2ZEtLQqetfoGqBlnU04QyXKf1G7_W3NFqWPo_rT6QkxPBTai9aTBERgwZoXM3_nlJZouYSP47E2llMx-lCRvGIHrrwFfQa",
        statusText: "Necesita Agua",
        statusDotColor: "bg-yellow-500",
        statusTextColor: "text-yellow-500",
        temperature: "25°C",
        humidity: "40%",
        waterLevel: "15%"
    },
    {
        id: 3,
        name: "Hierbas - Ventana Cocina",
        imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr0eqkJqrsUOhyuj_gJsuJVJl6N8BL4ItNP3g3Xydy5u2nouGaNpwUcGkKN2NmiDKf-Gt__ssBUXQQMMXY7YSI1FY5I01CILFhd9D7Wa9wFaaveqTMk4ZnNUEwiBRqQxZVXPhj-6YvPHJITBjafbAFBEMI2kNpnb5c5GkhlRb6vByVenoDqIQaq2FIrndueUAZ89fqtHUSWUjOMXS3hBWfRv31P32oUrH77tl2nJOPpjZlh85DL20uoM8oq2h3H97dV7J1jP2wGQog",
        statusText: "Plaga Detectada",
        statusDotColor: "bg-red-500",
        statusTextColor: "text-red-500",
        temperature: "20°C",
        humidity: "60%",
        waterLevel: "50%"
    },
];

function MisCultivosPage() {
    return (
        <>
            <Header /> 

            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
                
                {/* Título de la Página */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                        Mis Cultivos
                    </h1>
                    <Link 
                    to="/cultivos/nuevo"
                    className="w-50 flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                        <span className="material-symbols-outlined">add</span>
                        <span>Añadir nuevo cultivo</span>
                    </Link>
                </div>
                
                {/* Contenedor de la Cuadrícula */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Mapeo para generar las tarjetas con los datos dados arriba*/}
                    {CULTIVATION_DATA.map(cultivo => (
                        <DetailedCultivationCard 
                            key={cultivo.id}
                            name={cultivo.name}
                            imageUrl={cultivo.imageUrl}
                            statusText={cultivo.statusText}
                            statusDotColor={cultivo.statusDotColor}
                            statusTextColor={cultivo.statusTextColor}
                            temperature={cultivo.temperature}
                            humidity={cultivo.humidity}
                            waterLevel={cultivo.waterLevel}
                        />
                    ))}
                    
                </div>
            </main>
            
            
        </>
    );
}

export default MisCultivosPage;