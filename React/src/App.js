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

import RegistroMascota from './Paginas/cliente/RegistroMascota';
import ConsultarMascotas from './Paginas/cliente/ConsultarMascotas';
import PerfilMascota from './Paginas/cliente/PerfilMascota';

import Reserva from './Paginas/cliente/CrearReserva'; // Asegúrate de que la ruta sea correcta
import ConsultarReservaC from './Paginas/cliente/ConsultarReservaC';

import CrearQuejaC from './Paginas/cliente/CrearQuejaC'; // Ruta para CrearQuejaC
import ConsultarQuejaC from './Paginas/cliente/ConsultarQuejaC'; // Ruta para ConsultarQuejaC
import ActualizarQuejaC from './Paginas/cliente/ActualizarQuejaC'; // Ruta para ActualizarQuejaC
import PerfilC from './Paginas/cliente/PerfilC';

import ActualizarPerfilC from './Paginas/cliente/ActualizarPerfilC';




const App = () => {
    return (
        <Router>
            <Routes>
                
            </Routes>
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
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registrar" element={<Registrar />} />
                    <Route path="/menu" element={<MenuCliente />} />
                    <Route path="/registro-mascota" element={<RegistroMascota />} />
                    <Route path="/consultar-mascota" element={<ConsultarMascotas />} /> {/* Ruta para ConsultarMascotas */}
                    <Route path="/perfil-mascota/:id" element={<PerfilMascota />} /> {/* Ruta para PerfilMascotas con parámetro ID */}
                    <Route path="/reserva" element={<Reserva />} /> {/* Añadido para la reserva */}
                    <Route path='/consultarReservaC' element={<ConsultarReservaC />} />
                    <Route path='/crearQuejaC' element={<CrearQuejaC />} /> {/* Añadido para CrearQuejaC */}
                    <Route path='/consultarQuejaC' element={<ConsultarQuejaC />} /> {/* Añadido para ConsultarQuejaC */}
                    <Route path='/actualizarQuejaC' element={<ActualizarQuejaC />} /> {/* Añadido para ActualizarQuejaC */}
                    <Route path='/perfilC' element={<PerfilC />} /> 
                    <Route path="/actualizar-perfil" element={<ActualizarPerfilC />} />
                </Routes>
        </Router>
    );
};

export default App;
