// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <nav>
            <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
