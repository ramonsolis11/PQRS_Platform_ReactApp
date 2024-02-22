import React from 'react'

const ContactForm = () => {
    return (
        <div>
        <h2> Contáctanos </h2>
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

            {/* Enlace para redirigir a la página de inicio */}
            <p><a href="/">Volver al inicio</a></p>
        </form>
        </div>
    )
}

export default ContactForm
