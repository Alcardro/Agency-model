
import React from 'react';
import {Link } from "react-router-dom";
function Servicios (){


    return(
        <>
        <div className="serviceHeader">

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
    </div>

        <div>
            <h1>Welcome Servicios</h1>
        </div>
        </>

    );


}

export default Servicios;