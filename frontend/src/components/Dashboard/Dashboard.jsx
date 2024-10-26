import React, { useState } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Automatically registers all necessary components
import './Dashboard.css'; // Ensure to import the CSS for styling
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [currentChart, setCurrentChart] = useState('pie'); // State to track the current chart
  const [selectedCompany, setSelectedCompany] = useState(null); // State to track selected company

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

  // Updated barData with all five companies
  const barData = {
    labels: ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'], // Example company names
    datasets: [
      {
        label: 'Stock Prices',
        data: [120, 150, 90, 200, 250], // Data for all five companies
        backgroundColor: [
          '#FF6384', // Color for Company A
          '#36A2EB', // Color for Company B
          '#FFCE56', // Color for Company C
          '#4BC0C0', // Color for Company D
          '#9966FF', // Color for Company E
        ],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'], // Example months
    datasets: [
      {
        label: selectedCompany ? `${selectedCompany} Stats` : 'Company Stats',
        data: [65, 59, 80, 81, 56],
        fill: false,
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
      },
    ],
  };

  // Updated companies array with 5 companies
  const companies = [
    {
      id: 1,
      name: 'Company A',
      risk: 'Low',
      return: '5%',
      lts: '4%',
      last5YearReturn: '30%',
      last10YearReturn: '50%',
      last15YearReturn: '80%',
      week52High: '$150',
      week52Low: '$100',
      viewStats: () => setSelectedCompany('Company A'),
    },
    {
      id: 2,
      name: 'Company B',
      risk: 'Medium',
      return: '10%',
      lts: '6%',
      last5YearReturn: '45%',
      last10YearReturn: '60%',
      last15YearReturn: '75%',
      week52High: '$200',
      week52Low: '$130',
      viewStats: () => setSelectedCompany('Company B'),
    },
    {
      id: 3,
      name: 'Company C',
      risk: 'High',
      return: '15%',
      lts: '8%',
      last5YearReturn: '50%',
      last10YearReturn: '70%',
      last15YearReturn: '90%',
      week52High: '$250',
      week52Low: '$180',
      viewStats: () => setSelectedCompany('Company C'),
    },
    {
      id: 4,
      name: 'Company D',
      risk: 'Medium',
      return: '12%',
      lts: '5%',
      last5YearReturn: '40%',
      last10YearReturn: '55%',
      last15YearReturn: '70%',
      week52High: '$300',
      week52Low: '$210',
      viewStats: () => setSelectedCompany('Company D'),
    },
    {
      id: 5,
      name: 'Company E',
      risk: 'High',
      return: '18%',
      lts: '10%',
      last5YearReturn: '55%',
      last10YearReturn: '65%',
      last15YearReturn: '85%',
      week52High: '$350',
      week52Low: '$260',
      viewStats: () => setSelectedCompany('Company E'),
    },
  ];

  const handleNext = () => {
    setCurrentChart(prev => (prev === 'pie' ? 'bar' : 'pie')); // Toggle between pie and bar
  };

  const handleViewStats = (company) => {
    if (selectedCompany === company) {
      setSelectedCompany(null); // Deselect if the same company is clicked
    } else {
      setSelectedCompany(company);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="charts-container">
        <button onClick={handleNext} className="chart-toggle-button">➡️</button> {/* Changed the arrow here */}
        <div className="chart">
          <h3>{selectedCompany ? `${selectedCompany} Stats` : (currentChart === 'pie' ? 'First Pie Chart' : 'Bar Chart')}</h3>
          {/* Set fixed size for charts */}
          <div className="chart-wrapper">
            {selectedCompany ? <Line data={lineData} /> : (currentChart === 'pie' ? <Pie data={data1} /> : <Bar data={barData} />)}
          </div>
        </div>
        <button onClick={handleNext} className="chart-toggle-button">➡️</button> {/* Changed the arrow here */}
      </div>
      <div className="data-section">
        <h3>Stocks Overview</h3>
        <table className="stocks-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Company Name</th>
              <th>Risk</th>
              <th>Return</th>
              <th>LTS</th>
              <th>Last 5-Year Return</th>
              <th>Last 10-Year Return</th>
              <th>Last 15-Year Return</th>
              <th>52 Week High</th>
              <th>52 Week Low</th>
              <th>View Stats</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={company.id}>
                <td>{index + 1}</td>
                <td>{company.name}</td>
                <td>{company.risk}</td>
                <td>{company.return}</td>
                <td>{company.lts}</td>
                <td>{company.last5YearReturn}</td>
                <td>{company.last10YearReturn}</td>
                <td>{company.last15YearReturn}</td>
                <td>{company.week52High}</td>
                <td>{company.week52Low}</td>
                <td>
                  <button onClick={() => handleViewStats(company.name)}>View Stats</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/financialProfile" className="create-new-button">Create New</Link>
    </div>
  );
};

export default Dashboard;
