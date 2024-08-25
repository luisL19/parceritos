import React from 'react';
import './style_perfil_empleado.css'; // Importa los estilos específicos

const PerfilEmpleado = () => {
    return (
        <div className="perfil-empleado">
            <h1>Perfil del Empleado</h1>
            <div className="empleado-info">
                <p><strong>Nombre:</strong> Carlos Martínez</p>
                <p><strong>Email:</strong> carlos.martinez@example.com</p>
                {/* Otros datos relevantes */}
            </div>
            <div className="opciones-empleado">
                <button>Consultar Reservas</button>
                <button>Actualizar Información</button>
                {/* Agrega más botones o enlaces según sea necesario */}
            </div>
        </div>
    );
};

export default PerfilEmpleado;
