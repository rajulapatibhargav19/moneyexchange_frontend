// src/components/RoleSelection.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <Container className="mt-4 text-center">
      <h2>Select Role</h2>
      <div className="d-flex justify-content-center gap-4 mt-4">
        <Button
          variant="primary"
          style={{ padding: "40px 60px", fontSize: "20px" }}
          onClick={() => navigate("/user-login")}
        >
          User
        </Button>

        <Button
          variant="success"
          style={{ padding: "40px 60px", fontSize: "20px" }}
          onClick={() => navigate('/trusty-login')}
        >
          Trusty
        </Button>
      </div>
    </Container>
  );
}

export default RoleSelection;
