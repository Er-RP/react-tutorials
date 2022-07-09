import React from "react";

const Dashboard = ({ user }) => {
  return (
    <section className="section">
      <h2>User Name : {user?.name}</h2>
      <p>Email: {user?.email}</p>
    </section>
  );
};

export default Dashboard;
