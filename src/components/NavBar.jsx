// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar">
            {/* Botón del menú hamburguesa visible solo en pantallas pequeñas */}
            <button className="menu-icon" onClick={handleNavCollapse}>
                {/* Estilizado con CSS para parecer un menú hamburguesa */}
                <div className="hamburger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>
            <div className={`navbar-collapse ${isNavCollapsed ? 'collapse' : 'active'}`}>
                {/* tus items del navbar */}
            </div>
            <ul className={`navbar-nav ${isNavCollapsed ? '' : 'active'}`}>
                {/* tus items del navbar */}
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">Nosotros</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-link">Servicios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pqrs-form" className="nav-link">PQRS</Link>
                </li>
                <li className="nav-item">
                        <Link to="/login" className="btn">Iniciar Sesión</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="btn btn-primary">Regístrate</Link>
                    </li>
                </ul>
        </nav>
    );
};

export default NavBar;


