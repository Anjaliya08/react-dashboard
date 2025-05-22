import React, { useState } from "react";
import LoginPage from "./components/Loginpage";

export default function App() {
  const [user, setUser] = useState(null);

  function handleLogin(email) {
    setUser(email);
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome, {user}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
