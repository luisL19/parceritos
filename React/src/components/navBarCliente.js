import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBarCliente = () => {
  return (
    <header className="d-flex justify-content-between align-items-center bg-white p-3 shadow-sm">
      <div className="logo">
        <a href="../Menus/Cliente.html">
          <img src="../img/logo.png" alt="Logo Parceritos Fieles" className="img-fluid" style={{ width: '50px' }} />
        </a>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Mascotas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="../Gestion_Clientes/RegistroMascota.html">Registrar</Link>
              <Link className="dropdown-item" to="../Gestion_Mascotas/ConsultarMascotas.html">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Reservas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="../Gestion_Reserva/crear.html">Registrar</Link>
              <Link className="dropdown-item" to="../Gestion_Reserva/consultar.html">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Quejas
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="../Gesttion_Quejas/Crear_queja.html">Registrar</Link>
              <Link className="dropdown-item" to="../Gesttion_Quejas/Consultar_Quejas.html">Consultar</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="../Gestion_Clientes/Perfil.html">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarCliente;
