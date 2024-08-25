import React from "react";
import Logo from '../assets/Imagenes/logo.png'
import './styleNavIndex.css'

function NavIndex() {
    return(
        <div>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="container">
                <ul>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#servicio">Servicios</a></li>
                    <li><a href="#ubicacion">Ubicación</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                </nav>
                </header>
        </div>

    );
}
export default NavIndex;