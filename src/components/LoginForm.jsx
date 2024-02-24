import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";


const LoginForm = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <section className="login-form">
            <h2 className="login-title">Iniciar Sesión</h2>
            <p className="login-description">Por favor, inicia sesión para continuar.</p>
            
            <button className="login-button" onClick={() => loginWithRedirect()}>
                Iniciar Sesión
            </button>
            
            {isAuthenticated && (
                <button className="logout-button" onClick={() => logout({ returnTo: window.location.origin })}>
                    Cerrar Sesión
                </button>
            )}
            
            <div className="help-section">
                <h3>¿Necesitas ayuda?</h3>
                <p>
                    Si tienes problemas para iniciar sesión, puedes <Link to="/forgot-password">restablecer tu contraseña</Link>.
                </p>
                <p>Si no tienes una cuenta, <Link to="/register">regístrate</Link>.</p>
            </div>
            
            <nav className="login-navigation">
                <Link to="/">Volver al inicio</Link>
            </nav>
        </section>
    );
};

export default LoginForm;

