import React from 'react';
import './style_perfil_gerente.css'; // Importa los estilos específicos

const PerfilGerente = () => {
    return (
        <div className="perfil-gerente">
            <h1>Perfil del Gerente</h1>
            <div className="gerente-info">
                <p><strong>Nombre:</strong> Jane Smith</p>
                <p><strong>Email:</strong> jane.smith@example.com</p>
                {/* Otros datos relevantes */}
            </div>
            <div className="opciones-gerente">
                <button>Consultar Clientes</button>
                <button>Gestionar Empleados</button>
                {/* Agrega más botones o enlaces según sea necesario */}
            </div>
        </div>
    );
};

export default PerfilGerente;
