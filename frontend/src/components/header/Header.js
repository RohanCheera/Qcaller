import React,{useState} from "react";
import "./header.css";
import {Link,useNavigate} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('User');
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    // Perform logout logic here (e.g., clear tokens, etc.)
  };
  return (
    <div className="header">
  <div className="header-container">
  <Link to={'/'} className="app-title">
  QCaller
  </Link>
    <div className="menu-bar">
    
      <Link to={isLoggedIn ? '/tasks' : '#'} 
            className={`main-menu-item ${!isLoggedIn ? 'disabled-link' : ''}`}
            onClick={e => !isLoggedIn && e.preventDefault()} > Portfolio</Link>
      
      {isLoggedIn ? (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {username}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">View Profile</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sign In
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => navigate('/login')}>Sign In</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  </div>
</div>

  );
}

export default Header;
