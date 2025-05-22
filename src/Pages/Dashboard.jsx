import Header from "../components/Header";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="flex-1 p-4 space-y-4">
      <Header />
      <div className="flex flex-wrap gap-4">
        <Card title="Total Users" value="1,240" />
        <Card title="Sales" value="$12,300" />
        <Card title="New Signups" value="320" />
        <Card title="Visitors" value="5,420" />
      </div>
    </div>
  );
};

export default Dashboard;
