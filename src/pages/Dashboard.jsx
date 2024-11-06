
import { Link, useNavigate, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div>Dashboard</div>
      <button onClick={handleLogout}>Logout</button>
      <Link to="welcome">Say welcome</Link>

      <Outlet/>
    </>
  );
};

export default Dashboard;
