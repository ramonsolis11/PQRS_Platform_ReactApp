
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactForm';
import PQRSFormPage from './components/PQRSForm';
import Footer from './components/Footer';
import './assets/styles/styles.css';


const App = () => {
  return (
    <Router>
        <div className="site-container">
          <NavBar />
          <div className="content-wrap"> {/* Contenedor para el contenido principal */}
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pqrs-form" element={<PQRSFormPage />} />
          </Routes>
          <Footer /> {/* El Footer fuera del content-wrap pero dentro del site-container */}
        </div>
      </div>
      </Router>
  );
}

export default App;

