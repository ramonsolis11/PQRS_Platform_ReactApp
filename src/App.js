import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactForm";
import PQRSFormPage from "./components/PQRSForm";
import Footer from "./components/Footer";
import "./assets/styles/styles.css";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <Auth0Provider
      domain='dev-hajdrkfgepsads5l.us.auth0.com'
      clientId='TwZHyADuToAE9Pa2HENMzPdETXYQPYfV'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router>
        <div className="site-container">
          <NavBar />
          <div className="content-wrap">
            {" "}
            {/* Contenedor para el contenido principal */}
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pqrs-form" element={<PQRSFormPage />} />
            </Routes>
            <Footer />{" "}
            {/* El Footer fuera del content-wrap pero dentro del site-container */}
          </div>
        </div>
      </Router>
    </Auth0Provider>
  );
};

export default App;
