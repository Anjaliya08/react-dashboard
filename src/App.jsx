import React, { useState } from "react";
import LoginPage from "./components/Loginpage";  // aapka existing login component
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
  const [user, setUser] = useState(null);

  function handleLogin(email) {
    setUser(email);
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ padding: 20, flex: 1, overflowY: "auto" }}>
          <h1>Welcome, {user}!</h1>
          <p>This is your dashboard.</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              marginTop: 20,
            }}
          >
            <Card title="Total Users" value="1,240" />
            <Card title="Sales" value="$12,300" />
            <Card title="New Signups" value="320" />
            <Card title="Visitors" value="5,420" />
          </div>
        </main>
      </div>
    </div>
  );
}
