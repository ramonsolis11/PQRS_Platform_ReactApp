// HomePage.js
import React from 'react';

const HomePage = () => {
    return (
        <div>
        <h2>Página de Inicio</h2>
        {/* Contenido de la página de inicio */}
        <p>Bienvenido a la página de inicio de la aplicación.</p>

        {/* Enlace para redirigir a la página de registro */}
        <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>

        {/* Enlace para redirigir a la página de inicio de sesión */}
        <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>

        {/* Enlace para redirigir a la página de recuperación de contraseña */}
        <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>

        {/* Enlace para redirigir a la página de servicios */}
        <p><a href="/services">Ver nuestros servicios</a></p>

        {/* Enlace para redirigir a la página "Sobre Nosotros" */}
        <p><a href="/about">Sobre Nosotros</a></p>

        {/* Enlace para redirigir a la página de contacto */}
        <p><a href="/contact">Contacto</a></p>

        {/* Enlace para redirigir a la página de inicio */}
        <p><a href="/">Volver al inicio</a></p>
        </div>
    );
};

export default HomePage;
