import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/UserDashboard.css"; // Optional: for styling

function UserDashboard() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[\w.-]+@[\w.-]+\.(com)$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^_-])[A-Za-z\d@$!%*?#&^_-]{8,}$/;

    if (!name || !phone || !email || !password) {
      setError("All fields are required.");
      return false;
    }

    if (!phoneRegex.test(phone)) {
      setError("Phone must start with 6-9 and be 10 digits.");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("Email must contain @ and end with .com.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain uppercase, lowercase, number, and special character."
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess("Signup successful!");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">User Signup</h3>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}
        <Button variant="primary" type="submit" className="w-100">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
export default UserDashboard;

