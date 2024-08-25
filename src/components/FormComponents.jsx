// src/components/FormComponents.jsx
import React from 'react';
import './FormComponents.css'; // Estilos específicos para formularios

export const InputField = ({ label, type, value, onChange }) => (
    <div className="input-field">
        <label>{label}</label>
        <input type={type} value={value} onChange={onChange} />
    </div>
);

export const SubmitButton = ({ text, onClick }) => (
    <button className="submit-button" onClick={onClick}>
        {text}
    </button>
);
