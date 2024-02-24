import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const { loginWithRedirect } = useAuth0();

    const handleRegister = () => {
        loginWithRedirect({
            screen_hint: "signup",
        });
    };

    return (
        <section className="login-form">
            <h2 className="login-title">Registro</h2>
            <p className="login-description">Registra una nueva cuenta.</p>
            
            <button className="login-button" onClick={handleRegister}>
                Registrarse con Auth0
            </button>
            
            <div className="help-section">
                <h3>¿Necesitas ayuda?</h3>
                <p>
                    Si tienes problemas para registrarte, puedes <Link to="/forgot-password">restablecer tu contraseña</Link>.
                </p>
                <p>Si ya tienes una cuenta, <Link to="/login">inicia sesión</Link>.</p>
            </div>
            
            <nav className="login-navigation">
                <Link to="/">Volver al inicio</Link>
            </nav>
        </section>
    );
};

export default RegisterForm;




