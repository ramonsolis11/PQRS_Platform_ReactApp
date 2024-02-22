// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar">
            <button className="menu-icon" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed}>
                <div className="hamburger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>
            <ul className={`navbar-nav ${isNavCollapsed ? 'collapse' : 'active'}`}>
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
                    <Link to="/login" className="btn nav-link">Iniciar Sesión</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="btn btn-primary nav-link">Regístrate</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;



