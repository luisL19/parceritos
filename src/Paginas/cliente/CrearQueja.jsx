import React, { useState } from 'react';
import './style_crear_queja.css'; // Importa los estilos específicos

const CrearQueja = () => {
    const [queja, setQueja] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar la queja
        console.log('Queja enviada:', queja);
    };

    return (
        <div className="crear-queja">
            <h1>Crear Queja</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={queja}
                    onChange={(e) => setQueja(e.target.value)}
                    placeholder="Escribe tu queja aquí"
                    required
                />
                <button type="submit">Enviar Queja</button>
            </form>
        </div>
    );
};

export default CrearQueja;
