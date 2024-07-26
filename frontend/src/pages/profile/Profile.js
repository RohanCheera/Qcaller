import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Bar, Line, Gauge } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

Chart.register(...registerables);

const Profile = () => {
  const username = "John Doe";
  const email = "john.doe@example.com";
  const phoneNumber = "123-456-7890";

  // Data for performance charts
  const projectsData = {
    labels: ['Table 1', 'Table 2', 'Table 3'],
    datasets: [
      {
        label: 'Number of Records',
        data: [150, 200, 100],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)']
      }
    ]
  };

  const callsRatioData = {
    labels: ['Successful Calls', 'Total Calls'],
    datasets: [
      {
        label: 'Calls Ratio',
        data: [75, 100],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)']
      }
    ]
  };

  const amountRecoveredData = {
    labels: ['Amount Recovered'],
    datasets: [
      {
        label: 'Amount',
        data: [5000],
        backgroundColor: ['rgba(54, 162, 235, 0.6)']
      }
    ]
  };

  const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'User Activity',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div className="profile-container">
      <div className="user-info">
        <h2>{username}</h2>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </div>

      <div className="performance-charts">
        <div className="chart">
          <h3>Number of Projects</h3>
          <Bar data={projectsData} />
        </div>
        <div className="chart">
          <h3>Number of Calls Ratio</h3>
          <Bar data={callsRatioData} />
        </div>
        <div className="chart">
          <h3>Amount Recovered</h3>
          <Bar data={amountRecoveredData} />
        </div>
        <div className="chart">
          <h3>User Activity</h3>
          <Line data={userActivityData} />
        </div>
      </div>

      <div className="plans">
        <h3>Current Plan</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Monthly Plan</Accordion.Header>
            <Accordion.Body>
              Details about the Monthly Plan.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <h3>Other Plans</h3>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Free Plan</Accordion.Header>
            <Accordion.Body>
              Details about the Free Plan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Monthly Plan</Accordion.Header>
            <Accordion.Body>
              Details about the Monthly Plan.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Annual Plan</Accordion.Header>
            <Accordion.Body>
              Details about the Annual Plan.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Profile;
