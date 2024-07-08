// TextField.jsx
import React from 'react';
import './TextField.css';

const TextField = ({ label, error, ...rest }) => (
  <div className="text-field-container">
    <label>{label}</label>
    <input {...rest} />
    {error && <p>{error.message}</p>}
  </div>
);

export default TextField;
