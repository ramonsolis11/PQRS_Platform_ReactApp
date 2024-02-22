// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
    return (
        <main className="about-page">
            <section className="about-intro">
                <h1>Descubre DESTILERÍA CERRO AZUL</h1>
                <p>Comprometidos con la excelencia, en DESTILERÍA CERRO AZUL nos dedicamos a la producción de bebidas espirituosas y cosméticos de la más alta calidad. Nuestra pasión por la innovación y la satisfacción del cliente nos ha llevado a obtener certificaciones de Buenas Prácticas de Manufactura y el reconocimiento de la Agencia de Regulación Sanitaria.</p>
            </section>

            <section className="about-cta">
                <h2>Únete a Nuestra Comunidad</h2>
                <p>Regístrate y sé parte de la evolución de nuestros productos. Tu opinión es vital para continuar mejorando y ofrecer la mejor calidad en cada gota y cada detalle.</p>
                <div className="cta-buttons">
                    <Link to="/register" className="btn btn-primary">Crea tu Cuenta</Link>
                    <Link to="/" className="btn btn-outline">Más sobre nosotros</Link>
                </div>
            </section>

            <section className="features">
                <h2>Participa en la Mejora Continua</h2>
                <ul>
                    <li>Envía tus Peticiones, Quejas, Reclamos y Sugerencias de manera directa y sencilla.</li>
                    <li>Disfruta de una atención personalizada por parte de nuestro dedicado departamento de Atención al Cliente.</li>
                    <li>Influye positivamente en la calidad y desarrollo de nuevos productos.</li>
                </ul>
            </section>
        </main>
    );
};

export default AboutPage;



