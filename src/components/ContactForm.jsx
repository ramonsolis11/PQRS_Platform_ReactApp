import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        
        // Aquí podrías añadir validaciones adicionales si es necesario
        if (!formData.name || !formData.email || !formData.message) {
            setError("Por favor, rellena todos los campos.");
            setSubmitting(false);
            return;
        }

        try {
            // Aquí sustituirías con tu lógica de envío de datos, por ejemplo, usando fetch o axios
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setFormData({ name: '', email: '', message: '' }); // Limpiar el formulario
            alert('Mensaje enviado con éxito!');
        } catch (error) {
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contáctanos</h2>
            {error && <p className="error-message">{error}</p>} {/* Mensaje de error en la interfaz de usuario */}
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Verifica que los siguientes elementos se renderizan */}
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Enviar</button>
            </form>
            <p className="back-link">
                <a href="/" className="back-home-btn">Volver al inicio</a>
            </p>
        </div>
    );
};

export default ContactForm;


