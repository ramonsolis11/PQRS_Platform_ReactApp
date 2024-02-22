// LoginFormjsx
import React from 'react';


const LoginForm = () => {
    return (
        <div>
        <h2>Iniciar Sesión</h2>
        <form>
            {/* Inputs para nombre de usuario y contraseña */}
            <label htmlFor="username">Nombre de Usuario</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
            {/* Botón de inicio de sesión */}
            <button type="submit">Iniciar Sesión</button>

            {/* Enlace para redirigir a la página de registro */}
            <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>

            {/* Enlace para redirigir a la página de recuperación de contraseña */}
            <p><a href="/forgot-password">¿Olvidaste tu contraseña?</a></p>

            {/* Enlace para redirigir a la página de inicio */}
            <p><a href="/">Volver al inicio</a></p>
        </form>
        </div>
    );
};

export default LoginForm;
