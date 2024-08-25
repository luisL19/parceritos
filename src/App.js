import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PerfilCliente from './cliente/PerfilCliente';
import CrearQueja from './cliente/CrearQueja';
import PerfilGerente from './gerente/PerfilGerente';
import ConsultarCliente from './gerente/ConsultarCliente';
import PerfilEmpleado from './empleado/PerfilEmpleado';
import ConsultaEmpleado from './empleado/ConsultaEmpleado';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    {/* Ruta para la página de inicio ha sido eliminada, ya que ahora está incluida en Header */}
                    <Route path="/cliente/perfil" element={<PerfilCliente />} />
                    <Route path="/cliente/crear-queja" element={<CrearQueja />} />
                    <Route path="/gerente/perfil" element={<PerfilGerente />} />
                    <Route path="/gerente/consultar-cliente" element={<ConsultarCliente />} />
                    <Route path="/empleado/perfil" element={<PerfilEmpleado />} />
                    <Route path="/empleado/consulta" element={<ConsultaEmpleado />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
