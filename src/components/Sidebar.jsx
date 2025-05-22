const Sidebar = () => {
  return (
    <div style={{
      width: 250,
      height: "100vh",
      backgroundColor: "#2d3748",
      color: "white",
      padding: 20,
      boxSizing: "border-box"
    }}>
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "8px 0", cursor: "pointer" }}>Home</li>
        <li style={{ padding: "8px 0", cursor: "pointer" }}>Users</li>
        <li style={{ padding: "8px 0", cursor: "pointer" }}>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
