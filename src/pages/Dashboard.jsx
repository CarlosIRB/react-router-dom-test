import React from "react";
import { Link, Routes, useNavigate, Route, Outlet } from "react-router-dom";
import Welcome from "../components/Welcome";

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
