import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css'; 
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


function Login() {
  return (
    <div className="login-container">
        
      <Form className='login-form'>
        <Link to={'/'} className='close-button'>
          <IoClose/>
        </Link>
        <h2>Login </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <hr/>
        <Link to={'/register'}>
        <Button variant="primary" type="submit">
          Register
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
