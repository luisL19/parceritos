import React from 'react';
import { Link } from 'react-router-dom';
import '../Paginas/cliente/menu.css'; // Asegúrate de importar el CSS del menú
import logo from '../assets/Imagenes/logo.png'; // Asegúrate de que esta ruta sea correcta

const NavBarCliente = () => {
  const handleLogout = () => {
    // Maneja el cierre de sesión
    localStorage.removeItem('userToken');
    window.location.href = '/'; // Redirige a la página de inicio
  };

  return (
    <header className="d-flex justify-content-between align-items-center bg-white p-3 shadow-sm">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo Parceritos Fieles" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul className="nav">
        <li className="nav-item">
            <Link className="nav-link" to="/menu">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#">
              Mascotas
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/registro-mascota">Registrar</Link>
              <Link className="dropdown-item" to="/consultar-mascota">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#">
              Reservas
            </Link>
            <div className="dropdown-menu">
             <Link className="dropdown-item" to="/reserva">Registrar</Link> {/* Cambiado a /reserva */}
              <Link className="dropdown-item" to="/consultarReservaC">Consultar</Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#">
              Quejas
            </Link>
            <div className="dropdown-menu">
            <Link className="dropdown-item" to="/crearQuejaC">Registrar</Link> {/* Ruta actualizada */}
            <Link className="dropdown-item" to="/consultarQuejaC">Consultar</Link> {/* Ruta actualizada */}
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#">
              Cuenta
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/PerfilC">Perfil</Link>
              <Link className="dropdown-item" to="#" onClick={handleLogout}>Cerrar sesión</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarCliente;
