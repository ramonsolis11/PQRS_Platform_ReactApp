// HomePage.jsx
import React from 'react';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <h1>Bienvenido a la aplicación PQRS de DESTILERÍA CERRO AZUL</h1>
                <p>Nuestra aplicación está diseñada para brindarte una experiencia excepcional y mejorar continuamente nuestros servicios con tu ayuda.</p>

                <section className="features">
                    <h2>¿Qué puedes hacer con nuestra aplicación PQRS?</h2>
                    <ul>
                        <li>Realizar Peticiones, Quejas, Reclamos y Sugerencias fácilmente.</li>
                        <li>Recibir atención personalizada del departamento de Atención al Cliente.</li>
                        <li>Contribuir a la mejora de nuestros productos y servicios.</li>
                    </ul>
                </section>

                <section className="call-to-action">
                    <h2>¡Regístrate ahora para una mejor atención!</h2>
                    <p>Si aún no tienes una cuenta, puedes registrarte para utilizar todas las funcionalidades de nuestra aplicación PQRS.</p>
                    {/* <Link to="/register" className="btn btn-primary">Regístrate</Link> */}
                </section>
            </div>
        </div>
    );
};

export default HomePage;



