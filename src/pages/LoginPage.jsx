import React, { useState } from 'react';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor para el inicio de sesión

    };

    return (
        <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Iniciar Sesión</button>

            <p><a href="/">Volver al inicio</a></p>
            <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
            <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>
        </form>
        </div>
    );
};

export default LoginPage;
