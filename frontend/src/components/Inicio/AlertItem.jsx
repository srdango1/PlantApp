
/**
 * Componente para mostrar Alertas del sistema al usuario.
 * @param {string} iconName - Icono que representa la alerta
 * @param {string} iconColor - Color de la alerta para hacerla llamativa
 * @param {string} title - Nombre de la alerta/ a que hacer alusion
 * @param {string} timeAgo - Tiempo que lleva la alerta esperando ser vista
 * @param {string} isCritical - En caso de ser critica pone la alerta de color rojo
 * Por ahora muestra datos fijos que se rellenan en sidebar
 */
import React from 'react';

function AlertItem({ iconName, iconColor, title, timeAgo, isCritical = false }) {
  const baseClasses = "flex items-start gap-3 px-3 py-2";
  const criticalClasses = isCritical 
    ? "bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
    : "";
  const titleClasses = isCritical 
    ? "text-red-800 dark:text-red-200" 
    : "text-text-light dark:text-text-dark";

  return (
    <div className={`${baseClasses} ${criticalClasses} rounded-lg`}>
      <span className={`material-symbols-outlined ${iconColor} mt-1`}>{iconName}</span>
      <div className="flex flex-col">
        <p className={`text-sm font-medium ${titleClasses}`}>{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">{timeAgo}</p>
      </div>
    </div>
  );
}
export default AlertItem;