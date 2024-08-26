import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Paginas/index';
import Login from './Paginas/login/login';
import Registrar from './Paginas/Registrar/registrar';
import MenuCliente from './Paginas/cliente/menú';
import RegistroMascota from './Paginas/cliente/RegistroMascota';
import ConsultarMascotas from './Paginas/cliente/ConsultarMascotas'; // Asegúrate de importar este componente
import PerfilMascotas from './Paginas/cliente/PerfilMascota'; // Asegúrate de importar este componente

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<Registrar />} />
                <Route path="/menu" element={<MenuCliente />} />
                <Route path="/registro-mascota" element={<RegistroMascota />} />
                <Route path="/consultar-mascota" element={<ConsultarMascotas />} /> {/* Ruta para ConsultarMascotas */}
                <Route path="/perfil-mascota/:id" element={<PerfilMascotas />} /> {/* Ruta para PerfilMascotas con parámetro ID */}
            </Routes>
        </Router>
    );
};

export default App;
