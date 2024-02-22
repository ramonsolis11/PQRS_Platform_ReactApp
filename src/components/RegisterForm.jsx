// RegisterForm.js
import React from 'react';

const RegisterForm = () => {
    return (
        <div>
        <h2>Registro</h2>
        <form>
            {/* Inputs para nombre de usuario, correo electrónico y contraseña */}
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="password">Confirmar Contraseña</label>
            <input type="password" id="password" name="password" />
            
            {/* Botón de registro */}
            <button type="submit">Registrarse</button>

            {/* Enlace para redirigir a la página de inicio */}
            <p><a href="/">Volver al inicio</a></p>

            {/* Enlace para redirigir a la página de inicio de sesión */}
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>

            {/* Enlace para redirigir a la página de recuperación de contraseña */}
            <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>
        </form>
        </div>
    );
};

export default RegisterForm;
