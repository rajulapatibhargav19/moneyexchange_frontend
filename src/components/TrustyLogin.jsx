import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
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
      <Container className="login-container">
        <h4 className="login-title">Trusty Login</h4>
        <Form className="login-form" onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="trustyId">Trusty ID</Form.Label>
            <Form.Control
              id="trustyId"
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="error-message">{error}</p>}

          <p className="text-center">
            Don't have an account? <Link to="/trusty-dashboard">Sign up</Link>
          </p>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default TrustyLogin;
