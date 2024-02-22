// APP.JS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './pages/ContactPage';
import PQRSFormPage from './components/PQRSForm';
import './assets/styles/styles.css';



const App = () => {
  return (
    <Router>
      <div>
        <NavBar /> {/* Aquí se muestra el NavBar en la parte superior de la aplicación */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pqrs-form" element={<PQRSFormPage />} />
        </Routes>
        <footer>
          <p>© 2024 Grupo Aurum. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

