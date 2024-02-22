// AuthForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

const AuthForm = ({ title, onSubmit, children }) => {
    return (
        <div className="auth">
            <h1>{title}</h1>
            <form onSubmit={onSubmit}>
                {children}
                <button type="submit" className="btn btn-primary">{title}</button>
            </form>
            <Link to="/register">Registrarse</Link>
        </div>
    );
};

export default AuthForm;
