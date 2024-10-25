// Dashboard.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Automatically registers all necessary components
import './Dashboard.css'; // Ensure to import the CSS for styling

const Dashboard = () => {
  const data1 = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const data2 = {
    labels: ['Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [200, 150, 300],
        backgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
        hoverBackgroundColor: ['#4BC0C0', '#9966FF', '#FF9F40'],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="charts-container">
        <div className="chart">
          <h3>First Pie Chart</h3>
          <Pie data={data1} />
        </div>
        <div className="chart">
          <h3>Second Pie Chart</h3>
          <Pie data={data2} />
        </div>
      </div>
      <div className="data-section">
        <h3>Data Overview</h3>
        <p>This section can contain some data or statistics related to the charts above.</p>
      </div>
      <button className="create-new-button">Create New</button>
    </div>
  );
};

export default Dashboard;
