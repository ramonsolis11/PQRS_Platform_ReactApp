// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h2>Acerca de Nosotros</h2>
            {/* Contenido sobre nosotros */}
            <p>Nuestro enfoque es la producción de bebidas y cosméticos de calidad para garantizar la satisfacción del consumidor nacional e internacional. </p>
            <p>Contamos con certificados de Buenas Prácticas de Manufactura y de la Agencia de Regulación Sanitaria.</p>

            {/* Enlace para redirigir a la página de inicio */}
            <p><Link to="/">Volver al inicio</Link></p>
        </div>
    );
};

export default AboutPage;

