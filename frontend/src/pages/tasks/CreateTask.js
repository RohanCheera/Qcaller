import React, { useState } from 'react';
import { Container, Button, Table, Form } from 'react-bootstrap';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [data, setData] = useState([
    { id: 1, name: '', phone_number: '', amount: '' }
  ]);

  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, name: '', phone_number: '', amount: '' }]);
  };

  const handleChange = (index, field, value) => {
    const updatedData = data.map((item, i) => i === index ? { ...item, [field]: value } : item);
    setData(updatedData);
  };

  const handleSubmit = () => {
    const task = {
      task_name: taskName,
      task_description: taskDescription,
      data: data.map(row => ({
        id: row.id,
        name: row.name,
        phone_number: row.phone_number,
        amount: parseFloat(row.amount)
      }))
    };
    console.log(task);
  };

  return (
    <Container className='mytasks'>
      <h2>Create Task</h2>
      <Form>
        <Form.Group controlId="taskName">
          <Form.Label>Task Name</Form.Label>
          <Form.Control 
            type="text" 
            value={taskName} 
            onChange={(e) => setTaskName(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="taskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control 
            as="textarea" 
            value={taskDescription} 
            onChange={(e) => setTaskDescription(e.target.value)} 
            required 
          />
        </Form.Group>
      </Form>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <Form.Control
                  type="text"
                  value={row.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  required
                />
              </td>
              <td>
                <Form.Control
                  type="text"
                  value={row.phone_number}
                  onChange={(e) => handleChange(index, 'phone_number', e.target.value)}
                  required
                />
              </td>
              <td>
                <Form.Control
                  type="number"
                  value={row.amount}
                  onChange={(e) => handleChange(index, 'amount', e.target.value)}
                  required
                />
              </td>
              <td>
                <Button variant="danger" className="m-1" onClick={() => setData(data.filter((_, i) => i !== index))}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAddRow}>Add Row</Button>
      <Button variant="success" onClick={handleSubmit}>Submit Task</Button>
    </Container>
  );
};

export default CreateTask;
