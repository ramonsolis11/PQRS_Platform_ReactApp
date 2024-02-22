// ServicesPage.js
import React from 'react';

const ServicesPage = () => {
    return (
        <div>
        <h2>Nuestros Servicios</h2>
        {/* Lista de servicios */}
        <ul>
            <li>Servicio 1</li>
            <li>Servicio 2</li>
            <li>Servicio 3</li>
            <li>Servicio 4</li>
        </ul>
            
            {/* Enlace para redirigir a la página de inicio */}
            <p><a href="/">Volver al inicio</a></p>
        </div>
    );
};

export default ServicesPage;