import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "../styles/UserLogin.css";

function UserLogin() {
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
    <div className="user-login-wrapper">
      <Container className="user-login-container">
        <h4 className="user-login-title">User Login</h4>
        <Form className="user-login-form" onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userId">User ID</Form.Label>
            <Form.Control
              id="userId"
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="userPassword">Password</Form.Label>
            <Form.Control
              id="userPassword"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="user-error-message">{error}</p>}

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/user-dashboard">Sign up</Link>
          </p>

          <Button variant="primary" type="submit" className="w-100 user-login-btn">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UserLogin;
