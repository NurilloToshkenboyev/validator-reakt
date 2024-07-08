// PasswordField.jsx
import React, { useState } from 'react';
import './PasswordField.css';

const PasswordField = ({ error, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Parol"
        {...rest}
      />
      <button type="button" onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default PasswordField;
