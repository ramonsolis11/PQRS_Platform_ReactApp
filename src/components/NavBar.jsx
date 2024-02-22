// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css';


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Destilería Cerro Azul" className="navbar-logo" />
                <h1 className="navbar-title">Aplicación PQRS</h1>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/">Inicio</Link></li>
                <li className="nav-item"><Link to="/about">Sobre Nosotros</Link></li>
                <li className="nav-item"><Link to="/services">Servicios</Link></li>
                <li className="nav-item"><Link to="/contact">Contacto</Link></li>
                <li className="nav-item"><Link to="/pqrs-form">Formulario PQRS</Link></li>
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
