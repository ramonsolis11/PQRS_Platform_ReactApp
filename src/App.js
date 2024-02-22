import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './pages/ContactPage';
import PQRSForm from './components/PQRSForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Aplicación de PQRS</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/pqrs-form">Formulario PQRS</a></li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pqrs-form" element={<PQRSForm />} />
        </Routes>

        <footer>
          <p>© 2024 - Aplicación de PQRS</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
