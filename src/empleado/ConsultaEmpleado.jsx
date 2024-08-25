import React, { useState, useEffect } from 'react';
import './style_consulta_empleado.css'; // Importa los estilos específicos

const ConsultaEmpleado = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Aquí podrías cargar los datos de las reservas desde una API o una fuente de datos
        const dataReservas = [
            { id: 1, cliente: 'John Doe', fecha: '2024-09-01', estado: 'Pendiente' },
            { id: 2, cliente: 'Mary Johnson', fecha: '2024-09-05', estado: 'Completada' },
        ];
        setReservas(dataReservas);
    }, []);

    return (
        <div className="consulta-empleado">
            <h1>Consulta de Reservas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva) => (
                        <tr key={reserva.id}>
                            <td>{reserva.cliente}</td>
                            <td>{reserva.fecha}</td>
                            <td>{reserva.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsultaEmpleado;
