import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <Link to="/privacy">Política de Privacidad</Link>
            <Link to="/terms">Términos de Servicio</Link>
            <p>© 2024 Grupo Aurum. Todos los derechos reservados.</p>
        </div>
        </footer>
    );
};

export default Footer;

