import React, { useState, useEffect } from 'react';
import './style_consultar-cliente-gerente.css'; // Importa los estilos específicos

const ConsultarCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        // Aquí podrías cargar los datos de los clientes desde una API o una fuente de datos
        const dataClientes = [
            { id: 1, nombre: 'John Doe', email: 'john.doe@example.com' },
            { id: 2, nombre: 'Mary Johnson', email: 'mary.johnson@example.com' },
        ];
        setClientes(dataClientes);
    }, []);

    return (
        <div className="consultar-cliente-gerente">
            <h1>Consultar Clientes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <button>Ver Detalles</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsultarCliente;
