import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../styles/TrustyLogin.css";

function TrustyLogin() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Please fill in both fields.");
      return;
    }
    if (userId === "user" && password === "123") {
      navigate("/user-dashboard");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Trusty Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>Trusty ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="error-message">{error}</p>}

          <p className="signup-text">
            Don't have an account? <Link to="/trusty-dashboard">Sign up</Link>
          </p>

          <Button type="submit" className="w-100 login-btn">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default TrustyLogin;
