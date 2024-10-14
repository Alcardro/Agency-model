

import Portrait from './assets/portrait.mp4';
import React from 'react';

import {Link } from "react-router-dom";


function PrincipalAgency() {


    return (
        <div className="headerPortrait">

            <video className="background-video" src={Portrait} preload="metadata" autoPlay loop muted />

            <nav className="navbar">
                <ul>
                    
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>Sobre Nosotros</Link>
                    </li>
                    <li>
                        <Link to={"/servicios"}>Servicios</Link>
                    </li>
                    <li>
                        <Link to={"/contacto"}>Contacto</Link>
                    </li>
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