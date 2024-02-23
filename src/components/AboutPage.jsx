// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
    return (
        <main className="about-page">
            <section className="about-intro">
                <h1>DESTILERÍA CERRO AZUL</h1>
                <p>En DESTILERÍA CERRO AZUL, fusionamos tradición y vanguardia para crear bebidas y cosméticos que trascienden fronteras. Nuestro compromiso con la calidad es inquebrantable, y nuestra visión es llevar la excelencia a cada hogar.</p>
                <p>Avalados por certificaciones internacionales, cada producto es un reflejo de nuestro compromiso con la sustentabilidad y la innovación responsable.</p>
            </section>

            <section className="about-cta">
                <h2>Construyendo el Futuro Juntos</h2>
                <p>Ser parte de DESTILERÍA CERRO AZUL significa influir en la evolución de productos que marcan tendencia. Regístrate para compartir tu voz y ayudarnos a perfeccionar cada detalle.</p>
                <div className="cta-buttons">
                    <Link to="/register" className="btn btn-primary">Únete Ahora</Link>
                    <Link to="https://www.grupo-aurum.com/destileria-cerro-azul" className="btn btn-outline">Más información</Link>
                </div>
            </section>

            <section className="features">
                <h2>Impacta con Tu Opinión</h2>
                <p>Tu experiencia es el catalizador de nuestra innovación. A través de tu feedback, ayudamos a dar forma al futuro de nuestros productos:</p>
                <ul>
                    <li>Comparte tus ideas y feedback a través de nuestra plataforma PQRS.</li>
                    <li>Recibe atención directa y personalizada para asegurar tu total satisfacción.</li>
                    <li>Participa en el proceso creativo y ve tus ideas cobrar vida.</li>
                </ul>
            </section>
        </main>
    );
};

export default AboutPage;





