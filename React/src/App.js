import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Paginas/index';
import Login from './Paginas/login/login';
import Registrar from './Paginas/Registrar/registrar';
import MenuCliente from './Paginas/cliente/menú';
import MenuEmpleado from './Paginas/empleado/menuEmpleado';
import ConsultarMascotasE from './Paginas/empleado/consultarMascotas';
import VerPerfilMascotaE from './Paginas/empleado/verPerfilMascota';
import ConsultarReservasE from './Paginas/empleado/consultarReservas';
import ConsultarQuejaE from './Paginas/empleado/consultarQuejaE';
import MiPerfilE from './Paginas/empleado/miPerfil';
import ActualizarDatosE from './Paginas/empleado/actualizarMisDatos'

const App = () => {
    return (
        <Router>
                <Routes>
                    {/* Ruta para la página de inicio ha sido eliminada, ya que ahora está incluida en Header */}
                    <Route path="/" element={<Index/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/registrar" element={<Registrar/>} />
                    <Route path="/menu" element={<MenuCliente/>} />
                    <Route path="/menuEmpleado" element={<MenuEmpleado/>} />
                    <Route path="/consultarMascotasE" element={<ConsultarMascotasE/>} />
                    <Route path='/verPerfilMascota' element={<VerPerfilMascotaE />} />
                    <Route path="/consultarReservasE" element={<ConsultarReservasE />} />
                    <Route path="/consultarQuejaE" element={<ConsultarQuejaE />} />
                    <Route path="/miPerfilE" element={<MiPerfilE />} />
                    <Route path="/actualizarDatosE" element={<ActualizarDatosE />} />
                </Routes>
        </Router>
    );
};

export default App;
