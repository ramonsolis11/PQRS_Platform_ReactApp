import React from 'react'
import elsabrozonLogo from '../assets/img/elsabrozonLogo.png.JPG';
import elquemonLogo from '../assets/img/elquemonLogo.png.JPG';
import piqueteLogo from '../assets/img/piqueteLogo.png.JPG';
import farolazoLogo from '../assets/img/farolazoLogo.png.JPG';
import purigelLogo from '../assets/img/purigelLogo.png.JPG';
import purialcoholLogo from '../assets/img/purialcoholLogo.png.JPG';

const ServicesPage = () => {
    return (
        <div className='services-container'>
            <h1>Nuestros Servicios y Productos</h1>
            <p>En Destilería Cerro Azul, nos dedicamos a la creación de productos que encantan los sentidos y preservan la tradición. Nuestro compromiso con la calidad y la satisfacción del cliente es inquebrantable, respaldado por certificaciones de Buenas Prácticas de Manufactura y la Agencia de Regulación Sanitaria.</p>

            <div className='product-grid'>
                <img src={elsabrozonLogo} alt="El SABROSÓN" className='product-logo' />
                <img src={elquemonLogo} alt="EL QUEMÓN" className='product-logo' />
                <img src={piqueteLogo} alt="PIQUETE" className='product-logo' />
                <img src={farolazoLogo} alt="FAROLAZO" className='product-logo' />
                <img src={purigelLogo} alt="PuriGel" className='product-logo' />
                <img src={purialcoholLogo} alt="PuriAlcohol" className='product-logo' />
            </div>

            <h2>Bebidas Originales</h2>
            <ul>
                <li><strong>El SABROSÓN:</strong> Aguardiente auténtico que captura la esencia de nuestras raíces.</li>
                <li><strong>EL QUEMÓN:</strong> Aguardiente La Leyenda, un destilado premium para los paladares más exigentes.</li>
                <li><strong>PIQUETE y FAROLAZO:</strong> Aguardientes con carácter, perfectos para compartir en momentos especiales.</li>
            </ul>

            <h2>Productos de Cuidado Personal</h2>
            <ul>
                <li><strong>PuriGel:</strong> Gel antibacterial que ofrece protección y cuidado en cada uso.</li>
                <li><strong>PuriAlcohol:</strong> Solución antibacterial en base a alcohol, ideal para la desinfección y la higiene personal.</li>
            </ul>

            <p>Nuestros productos son el resultado de procesos cuidadosamente controlados y de la pasión por la excelencia. Invitamos a nuestros clientes a explorar y disfrutar de la calidad superior que Destilería Cerro Azul ofrece.</p>
        </div>
    );
};

export default ServicesPage;

