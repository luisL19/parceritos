import React from 'react'
import Perro1 from '../../assets/Imagenes/perro1.jpeg'
import NavBar from '../../components/navBarCliente';

const Menu = () => {
  return (
    <div>
        <NavBar />
        <div>
    <section className="hero">
        <div className="hero-image">
        <img src={Perro1} alt="Perro" />
        <div className="hero-text">
            <h1>Bienvenido</h1>
            <h1>Cliente</h1>
        </div>
        </div>
    </section>
    <section className="team">
        <h2>Mis Mascotas</h2>
        <div className="team-members">
        <div className="team-member">
            <img src="../img/perro2.jpeg" alt="Team Member Profile Pic" />
            <h3>Rocky</h3>
        </div>
        </div>
    </section>
    </div>

    </div>
  );
}

export default Menu