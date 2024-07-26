import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import './tasks.css'
import { Link } from 'react-router-dom';

function Tasks() {
  const projects=[
    { "id": 1, "project_name": "AI Chatbot Development" },
    { "id": 2, "project_name": "E-commerce Platform" },
    { "id": 3, "project_name": "Social Media App" },
    { "id": 4, "project_name": "Weather Forecasting System" },
    { "id": 5, "project_name": "Healthcare Management System" },
    { "id": 6, "project_name": "Online Education Portal" },
    { "id": 7, "project_name": "Real-time Messaging App" },
    { "id": 8, "project_name": "Financial Analytics Dashboard" },
    { "id": 9, "project_name": "IoT Home Automation" },
    { "id": 10, "project_name": "Virtual Reality Game" }
  ]
  
  return (
    <Container className='tasks'>
 <div className='tasks-title'>
      <h2>Projects </h2>
     <Link to={'/create'}>
      <Button variant="success" className="m-1">Create New Project</Button>
      </Link>
      </div>

      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Project Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects && projects.map((n) => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.project_name}</td>
              
              <td>
                <Button variant="danger" className="m-1">Delete</Button>
                <Button variant="primary" className="m-1">Open</Button>
              </td>
            </tr>
          ))}
          {(projects.length>0)?
          <tr className='last-row'>
            <td>Count:{projects.length}</td>
           
          </tr>
          :""}
        </tbody>
      </Table>
    </Container>
  )
}

export default Tasks