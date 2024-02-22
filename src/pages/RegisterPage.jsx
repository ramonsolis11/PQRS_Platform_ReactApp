import React, { useState } from 'react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar los datos del formulario al servidor para el registro


        console.log(formData);

    };

    return (
        <div>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <button type="submit">Registrarse</button>

            <p><a href="/">Volver al inicio</a></p>
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
            <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>
        </form>
        </div>
    );
};

export default RegisterPage;
