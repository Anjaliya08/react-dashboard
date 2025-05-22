import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onLogin(email);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f4f8"
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        width: "300px"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginPage;
