import React from 'react';


const HomePage = () => {
    return (
        <div>
            <h2>Bienvenido a la aplicación PQRS de DESTILERÍA CERRO AZUL</h2>
            <p>Nuestra aplicación de Gestión de Peticiones, Quejas, Reclamos y Sugerencias (PQRS) está diseñada para brindarte una experiencia excepcional y mejorar nuestros servicios continuamente.</p>

            <h3>¿Qué puedes hacer con nuestra aplicación PQRS?</h3>
            <ul>
                <li>Realizar Peticiones, Quejas, Reclamos y Sugerencias de manera fácil y rápida.</li>
                <li>Recibir atención personalizada del departamento de Atención al Cliente.</li>
                <li>Ayudarnos a mejorar nuestros productos y servicios con tus comentarios y sugerencias.</li>
            </ul>

            <h3>¡Regístrate ahora para una mejor atención!</h3>
            <p>Si aún no tienes una cuenta, regístrate ahora para disfrutar de todas las funcionalidades de nuestra aplicación PQRS.</p>
            <p><a href="/register" className="cta-button">Regístrate</a></p>

            <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
            <p>¿Olvidaste tu contraseña? <a href="/forgot-password">Recupérala aquí</a></p>

            <p>¿Necesitas más información sobre nuestros servicios? <a href="/services">Conócelos aquí</a></p>
            <p>¿Quieres saber más sobre DESTILERÍA CERRO AZUL? <a href="/about">Sobre Nosotros</a></p>
            <p>¿Listo para contactarnos? <a href="/contact">Contáctanos aquí</a></p>
        </div>
    );
};

export default HomePage;

