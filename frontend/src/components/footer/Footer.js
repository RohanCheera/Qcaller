import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
  <div className="footer-container">
    <div className="footer-column">
      <h4>QCaller</h4>
      <p>Your one-stop solution for managing reminders and payments.</p>
    </div>
    <div className="footer-column">
      <h4>Quick Links</h4>
      <ul>
        <li>Home</li>
        <li>Create Task</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="footer-column">
      <h4>Contact Us</h4>
      <p>Email: info@qcaller.com</p>
      <p>Phone: +1-234-567-8901</p>
    </div>
  </div>
</div>

  )
}

export default Footer