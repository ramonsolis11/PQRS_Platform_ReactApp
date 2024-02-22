// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h2>Acerca de Nosotros</h2>
            {/* Contenido sobre nosotros */}
            <p>Somos una empresa dedicada a la prestación de servicios de calidad.</p>

            {/* Enlace para redirigir a la página de inicio */}
            <p><Link to="/">Volver al inicio</Link></p>
        </div>
    );
};

export default AboutPage;

