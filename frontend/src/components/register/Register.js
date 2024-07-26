import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'; 
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";

function Register() {
  return (
    <div className="register-container">
        
      <Form className='register-form'>
      <Link to={'/'} className='close-button'>
          <IoClose/>
        </Link>
        <h2>Sign Up</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="name" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <hr/>
        <Link to={'/login'}>
        <Button variant="primary" type="submit">
          Login
        </Button>
        </Link>
      </Form>
    </div>
  );
}




export default Register