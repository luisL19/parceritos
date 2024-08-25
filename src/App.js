import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Paginas';

const App = () => {
    return (
        <Router>
                <Routes>
                    {/* Ruta para la página de inicio ha sido eliminada, ya que ahora está incluida en Header */}
                    <Route path="/" element={<Index/>} />

                </Routes>
        </Router>
    );
};

export default App;
