// ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div>
            <h2>Contacto</h2>
            {/* Formulario de contacto */}
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required></textarea>
                <br />
                <button type="submit">Enviar</button>
            </form>
            
            {/* Enlace para redirigir a la página de inicio */}
            <p><Link to="/">Volver al inicio</Link></p>
        </div>
    );
};

export default ContactPage;

