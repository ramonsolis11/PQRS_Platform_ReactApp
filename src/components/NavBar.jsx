import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar">
            {/* Botón de menú hamburguesa para móviles */}
            <button className="menu-icon" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed}>
                {/* Icono del menú hamburguesa */}
                <div className="hamburger-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>
            {/* Links condicionales basados en la autenticación */}
            {!isAuthenticated && (
                <>
                    <Link to="/register" className="nav-item">
                        Regístrate
                    </Link>
                    <button onClick={() => loginWithRedirect()} className="nav-item">
                        Iniciar Sesión
                    </button>
                </>
            )}
            {isAuthenticated && (
                <>
                    <Link to="/pqrs" className="nav-item">
                        PQRS
                    </Link>
                    <button onClick={() => logout({ returnTo: window.location.origin })} className="nav-item">
                        Cerrar Sesión
                    </button>
                </>
            )}
            {/* Enlaces de navegación */}
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
                    <Link to="/contact" className="nav-link">Contáctanos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;



