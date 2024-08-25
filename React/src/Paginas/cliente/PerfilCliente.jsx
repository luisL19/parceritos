import React from 'react';
import './style_perfil_cliente.css'; // Importa los estilos específicos

const PerfilCliente = () => {
    return (
        <div className="perfil-cliente">
            <h1>Perfil del Cliente</h1>
            <div className="cliente-info">
                <p><strong>Nombre:</strong> Juan Pérez</p>
                <p><strong>Email:</strong> juan.perez@example.com</p>
                {/* Otros datos relevantes */}
            </div>
            <div className="opciones-cliente">
                <button>Actualizar Datos</button>
                <button>Crear Queja</button>
                {/* Agrega más botones o enlaces según sea necesario */}
            </div>
        </div>
    );
};

export default PerfilCliente;
