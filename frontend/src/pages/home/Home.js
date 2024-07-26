import React from "react";
import ImageSlider from "../../components/main_body/ImageSlider";
import "./Home.css";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home">
     
      <ImageSlider />
      <div className="home-body">
  <h1>Welcome to <span >QCaller!</span></h1>
  <h2>
    Are people not paying your bills on time? Let’s remind them effortlessly!
  </h2>
  <h3>
    We understand the frustration of unpaid bills and overdue payments. Our mission is to make the reminder process as smooth and stress-free as possible. With QCaller, you can rest easy knowing your reminders are taken care of.
  </h3>
  <p>Here’s how it works in 3 simple steps:</p>
  <h3>Create an Account</h3>
  <p>
    Sign up with just a few clicks and start managing your reminders today. It’s quick, easy, and secure.
  </p>
  <h3>Create Your Task</h3>
  <p>
    Add the people who owe you money, set the due dates, and personalize your reminder messages. We’ll handle the rest.
  </p>
  <h3>Monitor Your Tasks</h3>
  <p>
    Track all your reminders in one place. See who has been reminded, check their payment status, and get notified when payments are made.
  </p>
  <h2>Why Choose QCaller?</h2>
  <ul>
    <li>User-Friendly: Designed with simplicity in mind, our app ensures a smooth experience for everyone.</li>
    <li>Reliable Reminders: Never miss a due date again. We’ll make sure your reminders are sent on time, every time.</li>
    <li>Peace of Mind: Focus on what matters most while we handle the follow-ups.</li>
  </ul>
  <h2>
    Ready to get started? Join us today and take control of your payments with ease!
  </h2>
  <Link to={"/register"} className="cta">
    Sign Up Now
  </Link>
</div>

    </div>
  );
}

export default Home;
