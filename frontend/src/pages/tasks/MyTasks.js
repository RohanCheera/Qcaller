import React from 'react';
import Table from 'react-bootstrap/Table';
import { Button, Container } from 'react-bootstrap';
import './mytasks.css';

function MyTasks() {
  const data = [
    { "id": 1, "name": "John Doe", "phone_number": "555-1234", "amount": 100.50 },
    { "id": 2, "name": "Jane Smith", "phone_number": "555-2345", "amount": 200.75 },
    { "id": 3, "name": "Jim Brown", "phone_number": "555-3456", "amount": 300.20 },
    { "id": 4, "name": "Jessica White", "phone_number": "555-4567", "amount": 400.10 },
    { "id": 5, "name": "Jack Black", "phone_number": "555-5678", "amount": 500.55 },
    { "id": 6, "name": "Jill Green", "phone_number": "555-6789", "amount": 600.35 },
    { "id": 7, "name": "Joe Blue", "phone_number": "555-7890", "amount": 700.80 },
    { "id": 8, "name": "Jenny Yellow", "phone_number": "555-8901", "amount": 800.45 },
    { "id": 9, "name": "James Red", "phone_number": "555-9012", "amount": 900.70 },
    { "id": 10, "name": "Julie Purple", "phone_number": "555-0123", "amount": 1000.90 },
    { "id": 11, "name": "Jerry Violet", "phone_number": "555-1235", "amount": 1100.15 },
    { "id": 12, "name": "Janet Orange", "phone_number": "555-2346", "amount": 1200.25 },
    { "id": 13, "name": "Jordan Pink", "phone_number": "555-3457", "amount": 1300.65 },
    { "id": 14, "name": "Joel Grey", "phone_number": "555-4568", "amount": 1400.50 },
    { "id": 15, "name": "Jasmine Brown", "phone_number": "555-5679", "amount": 1500.40 },
    { "id": 16, "name": "Jake White", "phone_number": "555-6780", "amount": 1600.30 },
    { "id": 17, "name": "Joy Black", "phone_number": "555-7891", "amount": 1700.75 },
    { "id": 18, "name": "Jade Green", "phone_number": "555-8902", "amount": 1800.95 },
    { "id": 19, "name": "Jared Blue", "phone_number": "555-9013", "amount": 1900.85 },
    { "id": 20, "name": "Joan Yellow", "phone_number": "555-0124", "amount": 2000.10 },
    { "id": 21, "name": "Jason Red", "phone_number": "555-1236", "amount": 2100.50 },
    { "id": 22, "name": "Josie Purple", "phone_number": "555-2347", "amount": 2200.30 },
    { "id": 23, "name": "Jasper Violet", "phone_number": "555-3458", "amount": 2300.20 },
    { "id": 24, "name": "Jenna Orange", "phone_number": "555-4569", "amount": 2400.60 },
    { "id": 25, "name": "Jeremy Pink", "phone_number": "555-5670", "amount": 2500.70 }
  ];
  
  const totalAmount = data.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Container className='mytasks'>
      <div className='table-desc'>
      <h2>First Table</h2>
      <div>Table description Table description Table description Table description Table description</div>
      </div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((n) => (
            <tr key={n.id}>
              <td>{n.id}</td>
              <td>{n.name}</td>
              <td>{n.phone_number}</td>
              <td>{n.amount}</td>
              <td>
                <Button variant="danger" className="m-1">Delete</Button>
                <Button variant="success" className="m-1">Notify</Button>
              </td>
            </tr>
          ))}
          <tr className='last-row'>
            <td>Count:</td>
            <td>{data.length}</td>
            <td>Total Amount:</td>
            <td>{totalAmount.toFixed(2)}</td>
            <td>
              <Button variant="danger" className="m-1">Clear All</Button>
              <Button variant="success" className="m-1">Notify All</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default MyTasks;
