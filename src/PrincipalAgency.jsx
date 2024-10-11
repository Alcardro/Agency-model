

import Portrait from './assets/portrait.mp4';
import React from 'react';


function PrincipalAgency() {



    return (
        <div className="headerPortrait">

            <video className="background-video" src={Portrait} autoPlay loop muted />

            <nav className="navbar">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre Nosotros</a></li>
                    <li><a href="/services">Servicios</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
            <header className="hero">
                <h1>Bienvenido a Nuestra Agencia de Modelaje</h1>
                <p>Donde el talento y la belleza se encuentran</p>
                <button className="cta-button">Explorar Más</button>
            </header>
        </div>
    );


}


export default PrincipalAgency