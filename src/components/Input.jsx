import React from 'react';

const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        width: "100%",
        marginBottom: "12px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px"
      }}
    />
  );
};

export default Input;
