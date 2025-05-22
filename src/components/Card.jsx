const Card = ({ title, value }) => {
  return (
    <div style={{
      backgroundColor: "white",
      padding: 16,
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      flex: "1 1 200px",
      margin: 8,
      minWidth: 200
    }}>
      <h3 style={{ color: "#718096" }}>{title}</h3>
      <p style={{ fontSize: 24, fontWeight: "700" }}>{value}</p>
    </div>
  );
};

export default Card;
