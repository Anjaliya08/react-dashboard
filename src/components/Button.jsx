import React from 'react';

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4a90e2",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {children}
    </button>
  );
};

export default Button;
