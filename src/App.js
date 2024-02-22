import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './pages/ContactPage';
import PQRSForm from './components/PQRSForm';
import LoginPage from './components/LoginForm';
import RegisterPage from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Plataforma PQRS - Destilería Cerro Azul</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/contact">Contáctanos</Link></li>
            <li><Link to="/pqrs-form">Formulario PQRS</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/register">Registrarse</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pqrs-form" element={<PQRSForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

        <footer>
          <p>© 2024 Grupo Aurum. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
