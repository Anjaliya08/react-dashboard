const Header = () => {
  return (
    <div style={{
      backgroundColor: "#f7fafc",
      padding: 16,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: 20, fontWeight: "600" }}>Welcome Back</h1>
      <p>User Name</p>
    </div>
  );
};

export default Header;
