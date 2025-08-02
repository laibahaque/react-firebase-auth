import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../style/dashboardstyle.css"; // Import CSS file

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="top-right">
        <p className="email">{auth.currentUser?.email}</p>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="welcome-message">
        <h2>Welcome To Dashboard..!</h2>
      </div>
    </div>
  );
};

export default Dashboard;
